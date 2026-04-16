import { NextResponse } from 'next/server';
import { getAllComments } from '../../../lib/storage';

// GET — download a complete JSON snapshot of every comment in Redis (approved,
// rejected, pending). Intended as an archive/backup endpoint. IPs are already
// hashed at write-time (see lib/storage.js hashIP) so the dump is privacy-safe.
export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const commentsStorage = await getAllComments();
    const snapshot = {
      exportedAt: new Date().toISOString(),
      schemaVersion: 1,
      pages: commentsStorage,
    };

    const filename = `comments-snapshot-${new Date().toISOString().slice(0, 10)}.json`;
    return new NextResponse(JSON.stringify(snapshot, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to export comments' }, { status: 500 });
  }
}
