'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, X, Layers, Target } from 'lucide-react';

// Map glossary term names (lowercase) to complex materials keys
const termToMaterialMap = {
  "tailings": { key: "tailings", name: "Tailings" },
  "bulk waste rock": { key: "wasteRock", name: "Bulk Waste Rock & Refractory Ores" },
  "acid mine drainage (amd)": { key: "ard", name: "Acid Rock Drainage (ARD) / Acid Mine Drainage (AMD)" },
};

// Map glossary term names (lowercase) to page links
const termToPageMap = {
  "flowsheet": { href: "/flowsheets", label: "View Example Flowsheets", icon: Target },
};

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

  const material = termToMaterialMap[term.toLowerCase()];
  const pageLink = termToPageMap[term.toLowerCase()];

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
          <span className="flex flex-col gap-1.5">
            <Link
              href={`/glossary#${term.toLowerCase().replace(/[\s\/()]+/g, '-').replace(/-+/g, '-').replace(/-$/, '')}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              View in Glossary
            </Link>
            {material && (
              <Link
                href={`/complex-materials#${material.key}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 text-xs font-medium text-orange-600 hover:text-orange-700 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                View in Complex Materials Playbook
              </Link>
            )}
            {pageLink && (
              <Link
                href={pageLink.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 text-xs font-medium text-[#264563] hover:text-[#1e3450] transition-colors"
              >
                <pageLink.icon className="w-3.5 h-3.5" />
                {pageLink.label}
              </Link>
            )}
          </span>
          {/* Arrow */}
          <span className="absolute top-full left-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white" />
        </span>
      )}
    </span>
  );
}
