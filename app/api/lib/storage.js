import { Redis } from '@upstash/redis';

// Initialize Redis client - falls back to in-memory for local development
let redis = null;
let memoryFallback = {};

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
} catch (error) {
  console.warn('Redis initialization failed, using in-memory fallback:', error.message);
}

const COMMENTS_KEY = 'biomining_comments';

// Hash IP address for privacy
function hashIP(ip) {
  if (!ip || ip === 'unknown') return 'unknown';
  // Simple hash - in production, use crypto.createHash('sha256')
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
    if (redis) {
      const data = await redis.get(COMMENTS_KEY);
      const comments = data || {};
      return comments[page] || [];
    }
    return memoryFallback[page] || [];
  } catch (error) {
    console.error('Error getting comments:', error);
    return memoryFallback[page] || [];
  }
}

export async function getAllComments() {
  try {
    if (redis) {
      const data = await redis.get(COMMENTS_KEY);
      return data || {};
    }
    return memoryFallback;
  } catch (error) {
    console.error('Error getting all comments:', error);
    return memoryFallback;
  }
}

export async function addComment(page, comment) {
  try {
    // Hash the IP before storing
    const commentWithHashedIP = {
      ...comment,
      ip: hashIP(comment.ip)
    };

    if (redis) {
      const data = await redis.get(COMMENTS_KEY) || {};
      if (!data[page]) {
        data[page] = [];
      }
      data[page].push(commentWithHashedIP);
      await redis.set(COMMENTS_KEY, data);
    } else {
      if (!memoryFallback[page]) {
        memoryFallback[page] = [];
      }
      memoryFallback[page].push(commentWithHashedIP);
    }
    return true;
  } catch (error) {
    console.error('Error adding comment:', error);
    return false;
  }
}

export async function updateComment(page, commentId, updates) {
  try {
    if (redis) {
      const data = await redis.get(COMMENTS_KEY) || {};
      if (!data[page]) return false;

      const commentIndex = data[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      data[page][commentIndex] = { ...data[page][commentIndex], ...updates };
      await redis.set(COMMENTS_KEY, data);
      return true;
    } else {
      if (!memoryFallback[page]) return false;

      const commentIndex = memoryFallback[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      memoryFallback[page][commentIndex] = { ...memoryFallback[page][commentIndex], ...updates };
      return true;
    }
  } catch (error) {
    console.error('Error updating comment:', error);
    return false;
  }
}

export async function deleteComment(page, commentId) {
  try {
    if (redis) {
      const data = await redis.get(COMMENTS_KEY) || {};
      if (!data[page]) return false;

      const commentIndex = data[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      data[page].splice(commentIndex, 1);
      await redis.set(COMMENTS_KEY, data);
      return true;
    } else {
      if (!memoryFallback[page]) return false;

      const commentIndex = memoryFallback[page].findIndex(c => c.id === commentId);
      if (commentIndex === -1) return false;

      memoryFallback[page].splice(commentIndex, 1);
      return true;
    }
  } catch (error) {
    console.error('Error deleting comment:', error);
    return false;
  }
}
