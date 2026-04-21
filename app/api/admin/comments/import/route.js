import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const KEY_PREFIX = 'comments:';

export async function POST(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let snapshot;
  try {
    snapshot = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const pages = snapshot?.pages;
  if (!pages || typeof pages !== 'object') {
    return NextResponse.json({ error: 'Snapshot missing "pages" object' }, { status: 400 });
  }

  const results = {};
  for (const [pageName, comments] of Object.entries(pages)) {
    if (!Array.isArray(comments)) continue;
    await redis.set(`${KEY_PREFIX}${pageName}`, comments);
    results[pageName] = comments.length;
  }

  return NextResponse.json({
    imported: true,
    pageCount: Object.keys(results).length,
    perPage: results,
  });
}
