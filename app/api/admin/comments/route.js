import { NextResponse } from 'next/server';
import { getAllComments, updateComment, deleteComment } from '../../lib/storage';

// GET - Retrieve all comments (including unapproved)
export async function GET(request) {
  try {
    // Simple auth check - in production, use proper authentication
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Return all comments grouped by page
    const commentsStorage = await getAllComments();
    const allComments = Object.entries(commentsStorage).map(([page, comments]) => ({
      page,
      comments: comments.map(c => ({
        ...c,
        // Remove IP from response for privacy
        ip: c.ip ? `${c.ip.split('.')[0]}.*.*.*` : 'unknown'
      }))
    }));

    return NextResponse.json(allComments);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// PATCH - Approve or reject a comment
export async function PATCH(request) {
  try {
    // Simple auth check
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { page, commentId, action } = await request.json();

    if (!page || !commentId || !action) {
      return NextResponse.json(
        { error: 'Missing required fields: page, commentId, action' },
        { status: 400 }
      );
    }

    let success = false;

    if (action === 'approve') {
      success = await updateComment(page, commentId, { approved: true });
    } else if (action === 'reject') {
      success = await deleteComment(page, commentId);
    } else {
      return NextResponse.json(
        { error: 'Invalid action. Use "approve" or "reject"' },
        { status: 400 }
      );
    }

    if (!success) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Comment ${action}ed successfully`
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update comment' },
      { status: 500 }
    );
  }
}
