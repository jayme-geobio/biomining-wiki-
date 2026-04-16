'use client';

import React from 'react';
import { versions } from '../data/versions';

function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function PeopleList({ heading, names }) {
  if (!names || names.length === 0) return null;
  return (
    <div>
      <h4 className="text-sm font-semibold text-[#264563]/70 uppercase tracking-wider mb-2">
        {heading}
      </h4>
      <ul className="space-y-1">
        {names.map((name) => (
          <li
            key={name}
            className="text-[#264563] text-sm flex items-start gap-2"
          >
            <span className="text-[#264563]">•</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function VersionHistory() {
  const lastUpdated = process.env.NEXT_PUBLIC_BUILD_DATE
    ? new Date(process.env.NEXT_PUBLIC_BUILD_DATE).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className="min-h-screen pt-4 pb-6 max-w-6xl mx-auto px-4 space-y-6">
      {/* Header */}
      <div className="bg-[#edede6] rounded-3xl px-6 sm:px-10 py-10 shadow-xl border border-white">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#264563] mb-3 leading-tight">
          Version History
        </h1>
        <p className="text-base font-extralight text-[#264563]">
          A record of published versions of the Biomining Handbook, acknowledging those who helped create and update this resource.
        </p>
      </div>

      {/* Versions */}
      <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
        <h2 className="text-2xl font-bold text-[#264563] mb-2">Published Versions</h2>
        {lastUpdated && (
          <p className="text-[#264563]/60 text-sm mb-6">
            Current deployment last updated {lastUpdated}.
          </p>
        )}
        <div className="space-y-4">
          {versions.map((v, i) => (
            <div
              key={v.version}
              id={`v${v.version}`}
              className="bg-white rounded-lg p-5 border border-[#264563]/20"
            >
              <div className="flex items-baseline gap-3 flex-wrap mb-3">
                <h3 className="font-bold text-[#264563]" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}>
                  Version {v.version}
                </h3>
                {i === 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white bg-emerald-600">
                    Current
                  </span>
                )}
                <span className="text-sm text-[#264563]/60">
                  Published {formatDate(v.publishedDate)}
                </span>
              </div>
              {v.summary && (
                <p className="text-[#264563] text-sm mb-3">{v.summary}</p>
              )}
              {v.changes && v.changes.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#264563]/70 uppercase tracking-wider mb-2">
                    What Changed
                  </h4>
                  <ul className="space-y-1">
                    {v.changes.map((change, idx) => (
                      <li
                        key={idx}
                        className="text-[#264563] text-sm flex items-start gap-2"
                      >
                        <span className="text-[#264563]">•</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 border-t border-[#264563]/10">
                <PeopleList heading="Authors" names={v.authors} />
                <PeopleList heading="Contributors" names={v.contributors} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
