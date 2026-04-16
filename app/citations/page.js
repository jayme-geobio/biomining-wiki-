'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import CommentableContent from '../components/CommentableContent';
import PageNavigation from '../components/PageNavigation';
import { citationsData, categoryLabels } from '../data/citations';

export default function Citations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openCategories, setOpenCategories] = useState(new Set(Object.keys(citationsData)));

  function toggleCategory(key) {
    setOpenCategories(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  }

  const categories = Object.keys(citationsData);

  const filteredData = {};
  categories.forEach(cat => {
    if (selectedCategory !== 'all' && cat !== selectedCategory) return;
    const filtered = citationsData[cat].filter(ref => {
      const search = searchTerm.toLowerCase();
      return ref.authors.toLowerCase().includes(search) ||
             ref.title.toLowerCase().includes(search) ||
             ref.journal.toLowerCase().includes(search) ||
             ref.tags.some(t => t.toLowerCase().includes(search));
    });
    if (filtered.length > 0) filteredData[cat] = filtered;
  });

  const totalResults = Object.values(filteredData).reduce((sum, refs) => sum + refs.length, 0);

  return (
    <CommentableContent pageName="citations">
      <div className="min-h-screen pt-4 pb-6 max-w-6xl mx-auto px-4">
        <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
          {/* Header */}
          <div className="text-center mb-8">
            <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-[#264563] mb-3">References</h1>
            <p className="text-base text-[#264563] max-w-3xl mx-auto">
              In addition to the literature referenced throughout this handbook, we would like to acknowledge key workshop attendees whose insights inspired this resource: <strong>Mackenzie Best</strong>, <strong>Wenying Liu</strong>, <strong>Erin Marshall</strong>, <strong>Daniel Merino-Garcia</strong>, <strong>Sasha Milshteyn</strong>, <strong>Paul Reginato</strong>, <strong>Gerhard (Gary) Schenk</strong>, <strong>Alan Tordoir</strong>, and <strong>Luis Valencia</strong>. We also thank <strong>Ariana Caiati</strong>, <strong>Colbey Derwin</strong>, <strong>Jayme Feyhl-Buska</strong>, and the Homeworld team for bringing this handbook to life.

            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 text-center">
            <p className="text-orange-700 text-sm italic">References below are being used as placeholders. Final references will be updated prior to publication.</p>
          </div>

          {/* Search and Filter */}
          <div className="bg-[#edede6] rounded-xl p-6 mb-6 border border-gray-200 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#264563]/50" />
              <input
                type="text"
                placeholder="Search by author, title, journal, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg text-[#264563] text-lg placeholder-gray-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-[#264563] hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedCategory === cat
                      ? 'bg-[#264563] text-white'
                      : 'bg-gray-100 text-[#264563] hover:bg-gray-200'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-[#264563]/50 text-sm mb-4">
            Showing {totalResults} reference{totalResults !== 1 ? 's' : ''}
          </div>

          {/* Citations by Category */}
          <div className="space-y-4">
            {Object.entries(filteredData).map(([cat, refs]) => (
              <div key={cat} className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleCategory(cat)}
                  className="w-full bg-[#264563] p-4 flex items-center justify-between hover:bg-[#1e3450] transition-colors"
                >
                  <h2 className="font-bold text-white" style={{ fontSize: 'clamp(0.75rem, 2vw, 1.125rem)' }}>{categoryLabels[cat]}</h2>
                  <div className="flex items-center gap-2 text-white/70 text-sm shrink-0">
                    <span className="text-white/60">{refs.length} reference{refs.length !== 1 ? 's' : ''}</span>
                    <span>{openCategories.has(cat) ? 'Click to collapse' : 'Click to expand'}</span>
                    {openCategories.has(cat) ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
                  </div>
                </button>
                {openCategories.has(cat) && (
                  <div className="p-4 space-y-3">
                    {refs.map((ref) => (
                      <div key={ref.id} className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-[#264563] text-sm">
                          <span className="font-semibold">{ref.authors}</span> ({ref.year}).{' '}
                          <span className="italic">{ref.title}</span>.{' '}
                          <span className="text-[#264563]/70">{ref.journal}</span>
                          {ref.volume && <span className="text-[#264563]/70">, {ref.volume}</span>}
                          {ref.pages && <span className="text-[#264563]/70">, {ref.pages}</span>}.
                        </p>
                        <div className="flex gap-1.5 mt-2 flex-wrap">
                          {ref.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {totalResults === 0 && (
            <div className="text-center py-12">
              <p className="text-[#264563]/50">No references found matching your search.</p>
            </div>
          )}

          {/* Navigation */}
          <PageNavigation />
        </div>
      </div>
    </CommentableContent>
  );
}
