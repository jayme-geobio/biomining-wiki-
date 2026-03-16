'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, X } from 'lucide-react';

export default function GlossaryTerm({ term, definition, children }) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        popupRef.current && !popupRef.current.contains(e.target) &&
        triggerRef.current && !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Scroll popup into view after it opens
  useEffect(() => {
    if (open && popupRef.current) {
      popupRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [open]);

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className="underline decoration-dotted decoration-emerald-600/50 underline-offset-2 cursor-pointer hover:decoration-emerald-600 transition-colors"
      >
        {children}
      </span>
      {open && (
        <span
          ref={popupRef}
          className="absolute z-50 bottom-full left-0 mb-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 text-left"
          style={{ animation: 'popIn 0.15s ease-out' }}
        >
          <span className="flex items-start justify-between mb-2">
            <span className="text-sm font-bold text-[#264563]">{term}</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0">
              <X className="w-3.5 h-3.5" />
            </button>
          </span>
          <span className="block text-xs text-[#264563]/80 mb-3 leading-relaxed">{definition}</span>
          <Link
            href={`/glossary#${term.toLowerCase().replace(/[\s\/()]+/g, '-').replace(/-+/g, '-').replace(/-$/, '')}`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            View in Glossary
          </Link>
          {/* Arrow */}
          <span className="absolute top-full left-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white" />
        </span>
      )}
    </span>
  );
}
