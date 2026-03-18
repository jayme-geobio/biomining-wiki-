'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, AlertCircle } from 'lucide-react';

export default function CommentSystem({ pageName, contentRef }) {
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [commentPosition, setCommentPosition] = useState({ x: 0, y: 0 });
  const [commentText, setCommentText] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [wantsToContribute, setWantsToContribute] = useState(false);
  const [contributorName, setContributorName] = useState('');
  const [contributorEmail, setContributorEmail] = useState('');
  const [contributorDescription, setContributorDescription] = useState('');

  // Load comments on mount
  useEffect(() => {
    loadComments();
  }, [pageName]);

  // Add text selection listener
  useEffect(() => {
    if (!contentRef?.current) return;

    const handleMouseUp = (e) => {
      const selection = window.getSelection();
      const text = selection.toString().trim();

      if (text.length >= 5) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        setSelectedText(text);
        setCommentPosition({
          x: rect.right + 4,
          y: rect.top + window.scrollY - 200
        });

        // Get section title
        let element = selection.anchorNode;
        while (element && element !== contentRef.current) {
          if (element.tagName && /^H[1-6]$/.test(element.tagName)) {
            setSectionTitle(element.textContent);
            break;
          }
          element = element.parentElement;
        }
      } else {
        setSelectedText('');
      }
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest('.comment-icon-btn') && !e.target.closest('.comment-form')) {
        setSelectedText('');
        setShowCommentForm(false);
      }
    };

    const content = contentRef.current;
    content.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      content.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contentRef]);

  const loadComments = async () => {
    try {
      const response = await fetch(`/api/comments?page=${encodeURIComponent(pageName)}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
        highlightComments(data);
      }
    } catch (error) {
      // Error loading comments silently handled
    }
  };

  const highlightComments = (commentsData) => {
    if (!contentRef?.current) return;

    commentsData.forEach(comment => {
      highlightTextInElement(contentRef.current, comment.selectedText, comment.id);
    });
  };

  const highlightTextInElement = (element, textToHighlight, commentId) => {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const nodes = [];
    let node;
    while (node = walker.nextNode()) {
      nodes.push(node);
    }

    for (const textNode of nodes) {
      const text = textNode.textContent;
      const index = text.indexOf(textToHighlight);

      if (index !== -1) {
        const range = document.createRange();
        range.setStart(textNode, index);
        range.setEnd(textNode, index + textToHighlight.length);

        const span = document.createElement('span');
        span.className = 'commented-text';
        span.dataset.commentId = commentId;
        span.style.cssText = `
          background-color: rgba(34, 197, 94, 0.2);
          border-bottom: 2px solid rgba(34, 197, 94, 0.5);
          cursor: pointer;
          transition: all 0.2s;
        `;

        span.addEventListener('mouseenter', () => {
          span.style.backgroundColor = 'rgba(34, 197, 94, 0.3)';
        });

        span.addEventListener('mouseleave', () => {
          span.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
        });

        range.surroundContents(span);
        break;
      }
    }
  };

  const handleCommentClick = () => {
    setShowCommentForm(true);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (commentText.trim().length < 5) {
      setSubmitMessage({ type: 'error', text: 'Comment must be at least 5 characters long.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedText,
          comment: commentText,
          pageName,
          context: {
            sectionTitle: sectionTitle || 'Main Content',
            selectedText
          },
          ...(wantsToContribute && {
            contributor: {
              name: contributorName,
              email: contributorEmail,
              description: contributorDescription
            }
          })
        })
      });

      // Check if response has content
      const text = await response.text();
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        throw new Error(`Server returned invalid response: ${text.slice(0, 100)}`);
      }

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: data.message || 'Comment submitted!' });
        setCommentText('');
        setShowCommentForm(false);
        setSelectedText('');
        setWantsToContribute(false);
        setContributorName('');
        setContributorEmail('');
        setContributorDescription('');

        // Clear message after 5 seconds
        setTimeout(() => setSubmitMessage(null), 5000);
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Failed to submit comment.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: `Error: ${error.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Comment Icon - appears when text is selected */}
      {selectedText && !showCommentForm && (
        <button
          className="comment-icon-btn absolute z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg transition-all"
          style={{
            left: `${commentPosition.x}px`,
            top: `${commentPosition.y}px`,
          }}
          onClick={handleCommentClick}
          title="Add a comment"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      )}

      {/* Comment Form */}
      {showCommentForm && (
        <div
          className="comment-form fixed z-50 bg-white rounded-lg shadow-2xl border border-emerald-200 p-4 w-80"
          style={{
            left: `${commentPosition.x}px`,
            top: `${commentPosition.y}px`,
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-slate-900">Add Comment</h3>
            <button
              onClick={() => {
                setShowCommentForm(false);
                setCommentText('');
              }}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-3 p-2 bg-emerald-50 rounded text-sm text-slate-700 border-l-4 border-emerald-500">
            <strong>Selected text:</strong> "{selectedText.slice(0, 100)}{selectedText.length > 100 ? '...' : ''}"
          </div>

          <form onSubmit={handleSubmitComment}>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts, corrections, or suggestions..."
              className="w-full p-3 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
              rows="4"
              maxLength="500"
              required
            />
            {/* Contribute toggle */}
            <div className="mt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={wantsToContribute}
                  onChange={(e) => setWantsToContribute(e.target.checked)}
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-xs text-slate-600">Interested in Contributing</span>
              </label>
              {wantsToContribute && (
                <div className="mt-2 space-y-2 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs text-emerald-700 mb-1">Whether it's adding a new section, expanding existing content, contributing real-world examples, or reviewing for accuracy — let us know what you have in mind.</p>
                  <textarea
                    value={contributorDescription}
                    onChange={(e) => setContributorDescription(e.target.value)}
                    placeholder="Briefly describe your proposed contribution..."
                    className="w-full p-2 border border-slate-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                    rows="2"
                  />
                  <input
                    type="text"
                    value={contributorName}
                    onChange={(e) => setContributorName(e.target.value)}
                    placeholder="Your name"
                    className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  />
                  <input
                    type="email"
                    value={contributorEmail}
                    onChange={(e) => setContributorEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-slate-500">
                {commentText.length}/500 characters
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Submit Message */}
      {submitMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-lg shadow-lg max-w-md ${
            submitMessage.type === 'success'
              ? 'bg-emerald-100 border border-emerald-300 text-emerald-800'
              : 'bg-red-100 border border-red-300 text-red-800'
          }`}
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>{submitMessage.text}</p>
          </div>
        </div>
      )}

      {/* View Comments Button */}
      <button
        onClick={() => setShowComments(!showComments)}
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg transition-all flex items-center gap-2"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-medium">Comments ({comments.length})</span>
      </button>

      {/* Comments Sidebar */}
      {showComments && (
        <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto border-l border-slate-200">
          <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Comments</h2>
            <button
              onClick={() => setShowComments(false)}
              className="text-white hover:text-emerald-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            {comments.length === 0 ? (
              <p className="text-slate-500 text-center py-8">
                No comments yet. Select text to add the first comment!
              </p>
            ) : (
              comments.map(comment => (
                <div
                  key={comment.id}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                      {comment.context.sectionTitle}
                    </span>
                  </div>
                  <div className="mb-2 p-2 bg-slate-50 rounded text-sm text-slate-600 italic border-l-2 border-emerald-500">
                    "{comment.selectedText}"
                  </div>
                  <p className="text-slate-800">{comment.comment}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}
