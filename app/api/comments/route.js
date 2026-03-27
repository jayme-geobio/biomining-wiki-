import { NextResponse } from 'next/server';
import { getComments, addComment, hashIP } from '../lib/storage';

// Configuration
const MAX_COMMENTS_PER_HOUR = parseInt(process.env.MAX_COMMENTS_PER_HOUR || '3');
const COMMENT_MAX_LENGTH = parseInt(process.env.COMMENT_MAX_LENGTH || '500');

// POST - Submit a new comment
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate comment data
    if (!validateComment(body)) {
      return NextResponse.json(
        { error: 'Invalid comment data. Required: selectedText, comment, pageName, context' },
        { status: 400 }
      );
    }

    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    // Sanitize comment
    const sanitizedComment = sanitizeComment(body, clientIp);

    const page = sanitizedComment.pageName;
    const pageComments = await getComments(page);

    // Check rate limiting
    if (checkRateLimit(pageComments, clientIp)) {
      return NextResponse.json(
        { error: `Too many comments. Please wait before commenting again. (Limit: ${MAX_COMMENTS_PER_HOUR} per hour)` },
        { status: 429 }
      );
    }

    // Add comment
    await addComment(page, sanitizedComment);

    return NextResponse.json({
      success: true,
      message: 'Comment submitted successfully! It will appear after moderation.',
      id: sanitizedComment.id
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit comment' },
      { status: 500 }
    );
  }
}

function validateComment(comment) {
  const required = ['selectedText', 'comment', 'pageName', 'context'];
  return required.every(
    field => field in comment && String(comment[field]).trim()
  );
}

function sanitizeComment(comment, clientIp) {
  const sanitized = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    selectedText: String(comment.selectedText).trim().slice(0, COMMENT_MAX_LENGTH),
    comment: String(comment.comment).trim().slice(0, COMMENT_MAX_LENGTH),
    pageName: String(comment.pageName).toLowerCase().trim(),
    context: {
      sectionTitle: String(comment.context?.sectionTitle || 'Unknown Section').trim().slice(0, 200),
      selectedText: String(comment.selectedText).trim().slice(0, COMMENT_MAX_LENGTH)
    },
    timestamp: new Date().toISOString(),
    approved: false,
    ip: clientIp
  };

  if (comment.contributor) {
    sanitized.contributor = {
      name: String(comment.contributor.name || '').trim().slice(0, 200),
      email: String(comment.contributor.email || '').trim().slice(0, 200),
      description: String(comment.contributor.description || '').trim().slice(0, COMMENT_MAX_LENGTH)
    };
  }

  return sanitized;
}

function checkRateLimit(pageComments, clientIp) {
  if (!clientIp || clientIp === 'unknown') {
    return false;
  }

  // Hash the IP to match stored format
  const hashedIp = hashIP(clientIp);
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recentComments = pageComments.filter(
    c => c.ip === hashedIp && new Date(c.timestamp) > oneHourAgo
  );

  return recentComments.length >= MAX_COMMENTS_PER_HOUR;
}
