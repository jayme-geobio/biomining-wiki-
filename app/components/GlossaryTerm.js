'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, X, Layers, Target } from 'lucide-react';
import { getGlossaryMap } from '../data/glossary';

const glossaryMap = getGlossaryMap();

// Map glossary term names (lowercase) to complex materials keys
const termToMaterialMap = {
  "tailings": { key: "tailings", name: "Tailings" },
  "bulk waste rock": { key: "wasteRock", name: "Bulk Waste Rock & Refractory Ores" },
  "acid mine drainage (amd)": { key: "ard", name: "Acid Rock Drainage (ARD) / Acid Mine Drainage (AMD)" },
  "e-waste": { key: "ewaste", name: "Electronic Waste (E-waste)" },
  "electronic waste": { key: "ewaste", name: "Electronic Waste (E-waste)" },
  "electronic waste (e-waste)": { key: "ewaste", name: "Electronic Waste (E-waste)" },
  "acid rock drainage (ard)": { key: "ard", name: "Acid Rock Drainage (ARD) / Acid Mine Drainage (AMD)" },
  "refractory ore": { key: "wasteRock", name: "Bulk Waste Rock & Refractory Ores" },
  "refractory gold": { key: "wasteRock", name: "Bulk Waste Rock & Refractory Ores" },
  "refractory ores": { key: "wasteRock", name: "Bulk Waste Rock & Refractory Ores" },
  "phosphogypsum": { key: "other", name: "Other Secondary Resources" },
  "red mud": { key: "other", name: "Other Secondary Resources" },
  "coal by-products": { key: "other", name: "Other Secondary Resources" },
  "fly ash": { key: "other", name: "Other Secondary Resources" },
  "slag": { key: "other", name: "Other Secondary Resources" },
  "produced water": { key: "other", name: "Other Secondary Resources" },
  "geothermal brine": { key: "other", name: "Other Secondary Resources" },
};

// Map glossary term names (lowercase) to page links
const termToPageMap = {
  "flowsheet": { href: "/flowsheets", label: "View Example Flowsheets", icon: Target },
};

export default function GlossaryTerm({ term, definition, children }) {
  const [open, setOpen] = useState(false);
  const [popupStyle, setPopupStyle] = useState({});
  const [flipDown, setFlipDown] = useState(false);
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

  // Position the portal popup relative to the trigger
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const showBelow = rect.top < 200;
      setFlipDown(showBelow);

      if (showBelow) {
        setPopupStyle({
          position: 'fixed',
          top: rect.bottom + 8,
          left: Math.max(8, rect.left),
          zIndex: 9999,
        });
      } else {
        // Position above — we estimate popup height, then adjust after render
        setPopupStyle({
          position: 'fixed',
          bottom: window.innerHeight - rect.top + 8,
          left: Math.max(8, rect.left),
          zIndex: 9999,
        });
      }
    }
  }, [open]);

  // Ensure popup doesn't overflow off the right edge
  useEffect(() => {
    if (open && popupRef.current) {
      const popupRect = popupRef.current.getBoundingClientRect();
      if (popupRect.right > window.innerWidth - 8) {
        setPopupStyle(prev => ({
          ...prev,
          left: Math.max(8, window.innerWidth - popupRect.width - 8),
        }));
      }
    }
  }, [open, popupStyle.left]);

  const pathname = usePathname();
  const glossaryEntry = glossaryMap[term.toLowerCase()];
  const material = termToMaterialMap[term.toLowerCase()];
  const pageLink = termToPageMap[term.toLowerCase()];
  const resolvedDefinition = glossaryEntry ? glossaryEntry.definition : definition;

  const popup = open ? createPortal(
    <div
      ref={popupRef}
      className="w-72 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 text-left"
      style={{ ...popupStyle, animation: 'popIn 0.15s ease-out' }}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-bold text-[#264563]">{term}</span>
        <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="text-xs text-[#264563]/80 mb-3 leading-relaxed">{resolvedDefinition}</p>
      <div className="flex flex-col gap-1.5">
        {glossaryEntry && (
          <Link
            href={`/glossary#${term.toLowerCase().replace(/[\s\/()]+/g, '-').replace(/-+/g, '-').replace(/-$/, '')}`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            View in Glossary
          </Link>
        )}
        {material && (
          <Link
            href={`/complex-materials#${material.key}`}
            onClick={(e) => {
              setOpen(false);
              if (pathname === '/complex-materials') {
                e.preventDefault();
                window.location.hash = '';
                setTimeout(() => {
                  window.location.hash = material.key;
                }, 0);
              }
            }}
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
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className="underline decoration-dotted decoration-emerald-600/50 underline-offset-2 cursor-pointer hover:decoration-emerald-600 transition-colors"
      >
        {children}
      </span>
      {popup}
    </span>
  );
}
