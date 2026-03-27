import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const KEY_PREFIX = 'comments:';

// Hash IP address for privacy
export function hashIP(ip) {
  if (!ip || ip === 'unknown') return 'unknown';
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `hashed_${Math.abs(hash).toString(16)}`;
}

export async function getComments(page) {
  const data = await redis.get(`${KEY_PREFIX}${page}`);
  return data || [];
}

export async function getAllComments() {
  const result = {};
  let cursor = 0;
  do {
    const [nextCursor, keys] = await redis.scan(cursor, { match: `${KEY_PREFIX}*`, count: 100 });
    cursor = Number(nextCursor);
    for (const key of keys) {
      const pageName = key.replace(KEY_PREFIX, '');
      result[pageName] = await redis.get(key) || [];
    }
  } while (cursor !== 0);
  return result;
}

export async function addComment(page, comment) {
  const commentWithHashedIP = {
    ...comment,
    ip: hashIP(comment.ip)
  };
  const key = `${KEY_PREFIX}${page}`;
  const existing = await redis.get(key) || [];
  existing.push(commentWithHashedIP);
  await redis.set(key, existing);
  return true;
}

export async function updateComment(page, commentId, updates) {
  const key = `${KEY_PREFIX}${page}`;
  const comments = await redis.get(key) || [];
  const idx = comments.findIndex(c => c.id === commentId);
  if (idx === -1) return false;
  comments[idx] = { ...comments[idx], ...updates };
  await redis.set(key, comments);
  return true;
}

export async function deleteComment(page, commentId) {
  const key = `${KEY_PREFIX}${page}`;
  const comments = await redis.get(key) || [];
  const idx = comments.findIndex(c => c.id === commentId);
  if (idx === -1) return false;
  comments.splice(idx, 1);
  await redis.set(key, comments);
  return true;
}
