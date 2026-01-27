// In-memory storage - works immediately without any configuration
// Comments will persist until server restarts
// For permanent storage, configure Upstash Redis (see .env.local.example)

let memoryStorage = {};
let redis = null;
let redisInitialized = false;

const COMMENTS_KEY = 'biomining_comments';

// Lazy initialize Redis only when env vars are present
async function getRedis() {
  if (redisInitialized) return redis;
  redisInitialized = true;

  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const { Redis } = await import('@upstash/redis');
      redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      });
      console.log('Upstash Redis connected');
    } catch (error) {
      console.warn('Redis initialization failed, using in-memory storage:', error.message);
      redis = null;
    }
  } else {
    console.log('No Redis config found, using in-memory storage');
  }

  return redis;
}

// Hash IP address for privacy
function hashIP(ip) {
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
  try {
    const client = await getRedis();
    if (client) {
      const data = await client.get(COMMENTS_KEY);
      const comments = data || {};
      return comments[page] || [];
    }
    return memoryStorage[page] || [];
  } catch (error) {
    console.error('Error getting comments:', error);
    return memoryStorage[page] || [];
  }
}

export async function getAllComments() {
  try {
    const client = await getRedis();
    if (client) {
      const data = await client.get(COMMENTS_KEY);
      return data || {};
    }
    return memoryStorage;
  } catch (error) {
    console.error('Error getting all comments:', error);
    return memoryStorage;
  }
}

export async function addComment(page, comment) {
  try {
    const commentWithHashedIP = {
      ...comment,
      ip: hashIP(comment.ip)
    };

    const client = await getRedis();
    if (client) {
      const data = await client.get(COMMENTS_KEY) || {};
      if (!data[page]) {
        data[page] = [];
      }
      data[page].push(commentWithHashedIP);
      await client.set(COMMENTS_KEY, data);
    } else {
      if (!memoryStorage[page]) {
        memoryStorage[page] = [];
      }
      memoryStorage[page].push(commentWithHashedIP);
    }
    return true;
  } catch (error) {
    console.error('Error adding comment:', error);
    return false;
  }
}

export async function updateComment(page, commentId, updates) {
  try {
    const client = await getRedis();
    if (client) {
      const data = await client.get(COMMENTS_KEY) || {};
      if (!data[page]) return false;

      const commentIndex = data[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      data[page][commentIndex] = { ...data[page][commentIndex], ...updates };
      await client.set(COMMENTS_KEY, data);
      return true;
    } else {
      if (!memoryStorage[page]) return false;

      const commentIndex = memoryStorage[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      memoryStorage[page][commentIndex] = { ...memoryStorage[page][commentIndex], ...updates };
      return true;
    }
  } catch (error) {
    console.error('Error updating comment:', error);
    return false;
  }
}

export async function deleteComment(page, commentId) {
  try {
    const client = await getRedis();
    if (client) {
      const data = await client.get(COMMENTS_KEY) || {};
      if (!data[page]) return false;

      const commentIndex = data[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      data[page].splice(commentIndex, 1);
      await client.set(COMMENTS_KEY, data);
      return true;
    } else {
      if (!memoryStorage[page]) return false;

      const commentIndex = memoryStorage[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      memoryStorage[page].splice(commentIndex, 1);
      return true;
    }
  } catch (error) {
    console.error('Error deleting comment:', error);
    return false;
  }
}
