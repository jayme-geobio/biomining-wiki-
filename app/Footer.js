'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const sections = {
    learn: {
      name: 'Learn',
      items: [
        { name: 'What Is Biomining?', href: '/what-is-biomining' },
        { name: 'Mining 101', href: '/for-biologists' },
        { name: 'Biology 101', href: '/for-miners' },
        { name: 'Complex Materials Playbook', href: '/complex-materials' },
        { name: 'Example Flowsheets', href: '/flowsheets' },
      ],
    },
    professionals: {
      name: 'For Professionals',
      items: [
        { name: 'Technology Assessment Checklists', href: '/technology-evaluation' },
      ],
    },
    resources: {
      name: 'Resources',
      items: [
        { name: 'Frontier Challenges', href: '/research' },
        { name: 'Glossary', href: '/glossary' },
        { name: 'References', href: '/citations' },
      ],
    },
  };

  return (
    <div className="flex justify-center px-12 py-6 mt-10">
      <div className="w-full">
        <footer className="bg-[#0a3954] text-white rounded-2xl shadow-2xl px-12 py-8 border border-white">

          {/* Logo left, links right */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 mb-6">
            {/* Logo */}
            <img
              src="/images/homeworld-logo-full.png"
              alt="Homeworld Logo"
              className="h-14 shrink-0"
            />

            {/* Nav sections — pushed right, evenly spaced */}
            <div className="ml-auto grid gap-16" style={{gridTemplateColumns: 'repeat(4, 11rem)'}}>
              {/* Home column */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Home</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                </ul>
              </div>

              {Object.entries(sections).map(([key, section]) => (
                <div key={key}>
                  <h4 className="text-sm font-semibold text-white mb-3">{section.name}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-5" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-500">
            <span>© Homeworld Collective Inc {new Date().getFullYear()}</span>
            <span>Bridging biology and mining for critical mineral recovery</span>
          </div>

        </footer>
      </div>
    </div>
  );
}
