'use client';

import React, { useRef } from 'react';
import CommentSystem from './CommentSystem';

export default function CommentableContent({ pageName, children }) {
  const contentRef = useRef(null);

  return (
    <>
      <div ref={contentRef} className="commentable-content">
        {children}
      </div>
      <CommentSystem pageName={pageName} contentRef={contentRef} />
    </>
  );
}
