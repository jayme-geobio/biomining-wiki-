'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Mountain, Microscope, BookOpen } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import { glossaryData } from '../data/glossary';

function termToId(termName) {
  return termName.toLowerCase().replace(/[\s\/()]+/g, '-').replace(/-+/g, '-').replace(/-$/, '');
}

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openTerms, setOpenTerms] = useState(new Set());

  function toggleTerm(key) {
    setOpenTerms(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  }

  const allTerms = [
    ...glossaryData.mining.map(t => ({ ...t, category: 'mining' })),
    ...glossaryData.biology.map(t => ({ ...t, category: 'biology' }))
  ];

  // Auto-open and scroll to term from URL hash (on load and on hash change)
  useEffect(() => {
    function openFromHash() {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const idx = allTerms.findIndex(t => termToId(t.term) === hash);
      if (idx !== -1) {
        const t = allTerms[idx];
        setOpenTerms(new Set([`${t.category}-${idx}`]));
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  const filteredTerms = allTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <CommentableContent pageName="glossary">

      <div className="min-h-screen py-8 px-12">
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
        {/* Header */}
        <div className="text-center mb-8">
          <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-[#264563] mb-3">Core Glossary</h1>
          <p className="text-xl text-[#264563] max-w-3xl mx-auto">
            Canonical definitions bridging mining and biology terminology
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-[#edede6] rounded-xl p-6 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#264563]/50" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#264563] placeholder-gray-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-[#264563] hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory('mining')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === 'mining'
                    ? 'bg-[#264563] text-white'
                    : 'bg-gray-100 text-[#264563] hover:bg-gray-200'
                }`}
              >
                <Mountain className="w-4 h-4" />
                Mining
              </button>
              <button
                onClick={() => setSelectedCategory('biology')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === 'biology'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-[#264563] hover:bg-gray-200'
                }`}
              >
                <Microscope className="w-4 h-4" />
                Biology
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-[#264563]/50 text-sm mb-4">
          Showing {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
        </div>

        {/* Terms List */}
        <div className="space-y-3">
          {filteredTerms.map((term, i) => (
            <TermCard
              key={i}
              term={term}
              id={termToId(term.term)}
              expanded={openTerms.has(`${term.category}-${i}`)}
              onToggle={() => toggleTerm(`${term.category}-${i}`)}
            />
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#264563]/50">No terms found matching your search.</p>
          </div>
        )}

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/" className="text-[#264563] hover:text-[#264563]/70 flex items-center gap-2">
              ← Back to Home
            </Link>
            <Link href="/what-is-biomining" className="text-[#264563] hover:text-[#264563]/70 flex items-center gap-2">
              ← What Is Biomining?
            </Link>
          </div>
        </div>
      </div>
    </CommentableContent>
  );
}

function TermCard({ term, id, expanded, onToggle }) {
  const categoryColors = {
    mining: {
      bg: 'bg-[#264563]/10',
      border: 'border-[#264563]/30',
      badge: 'bg-[#264563]',
      text: 'text-[#264563]'
    },
    biology: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-600',
      badge: 'bg-emerald-600',
      text: 'text-emerald-700'
    }
  };

  const colors = categoryColors[term.category];

  return (
    <div id={id} className={`bg-[#edede6] rounded-lg border ${colors.border} overflow-hidden transition-all`}>
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${colors.badge}`}>
            {term.category === 'mining' ? <Mountain className="w-3 h-3 inline" /> : <Microscope className="w-3 h-3 inline" />}
          </span>
          <span className="text-lg font-bold text-[#264563]">{term.term}</span>
        </div>
        <span className="text-[#264563]/50 text-2xl">{expanded ? '−' : '+'}</span>
      </button>

      {expanded && (
        <div className="p-4 pt-0 border-t border-gray-200">
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="text-sm font-semibold text-[#264563]/50 mb-1">Definition</h4>
              <p className="text-[#264563]">{term.definition}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#264563]/50 mb-1">Examples</h4>
              <p className="text-[#264563] text-sm italic">{term.examples}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#264563]/10 rounded-lg p-3 border border-[#264563]/30">
                <h4 className="text-sm font-semibold text-emerald-600 mb-2 flex items-center gap-2">
                  <Microscope className="w-4 h-4" />
                  For Biologists
                </h4>
                <p className="text-[#264563] text-sm">{term.forBiologists}</p>
              </div>

              <div className="bg-[#264563]/10 rounded-lg p-3 border border-[#264563]/30">
                <h4 className="text-sm font-semibold text-[#264563] mb-2 flex items-center gap-2">
                  <Mountain className="w-4 h-4" />
                  For Miners
                </h4>
                <p className="text-[#264563] text-sm">{term.forMiners}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
