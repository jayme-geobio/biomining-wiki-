// Simple in-memory storage for comments
// Works immediately - no external dependencies required

const memoryStorage = {};

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
  return memoryStorage[page] || [];
}

export async function getAllComments() {
  return memoryStorage;
}

export async function addComment(page, comment) {
  const commentWithHashedIP = {
    ...comment,
    ip: hashIP(comment.ip)
  };

  if (!memoryStorage[page]) {
    memoryStorage[page] = [];
  }
  memoryStorage[page].push(commentWithHashedIP);
  return true;
}

export async function updateComment(page, commentId, updates) {
  if (!memoryStorage[page]) return false;

  const commentIndex = memoryStorage[page].findIndex(c => c.id === commentId);
  if (commentIndex === -1) return false;

  memoryStorage[page][commentIndex] = { ...memoryStorage[page][commentIndex], ...updates };
  return true;
}

export async function deleteComment(page, commentId) {
  if (!memoryStorage[page]) return false;

  const commentIndex = memoryStorage[page].findIndex(c => c.id === commentId);
  if (commentIndex === -1) return false;

  memoryStorage[page].splice(commentIndex, 1);
  return true;
}
