'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const navigation = {
    learn: [
      { name: 'What Is Biomining?', href: '/what-is-biomining' },
      { name: 'Glossary', href: '/glossary' }
    ],
    professionals: [
      { name: 'For Biologists', href: '/for-biologists' },
      { name: 'For Miners', href: '/for-miners' }
    ],
    resources: [
      { name: 'Complex Materials', href: '/complex-materials' },
      { name: 'Flowsheets', href: '/flowsheets' },
      { name: 'Research', href: '/research' }
    ],
    strategic: [
      { name: 'Fit Test', href: '/fit-test' },
      { name: 'Mining–Academia', href: '/mining-academia' },
      { name: 'Research Priorities', href: '/research-priorities' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section - Logo and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo */}
          <div className="md:col-span-3">
            <img
              src="/images/homeworld-logo-full.png"
              alt="Homeworld Logo"
              className="h-20 mb-4"
            />
            <p className="text-sm text-emerald-200">
              Bridging biology and mining for sustainable critical mineral recovery
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Learn */}
            <div>
              <h3 className="font-semibold text-emerald-300 mb-3">Learn</h3>
              <ul className="space-y-2">
                {navigation.learn.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-emerald-100 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Professionals */}
            <div>
              <h3 className="font-semibold text-emerald-300 mb-3">For Professionals</h3>
              <ul className="space-y-2">
                {navigation.professionals.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-emerald-100 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-emerald-300 mb-3">Resources</h3>
              <ul className="space-y-2">
                {navigation.resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-emerald-100 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Topics */}
            <div>
              <h3 className="font-semibold text-emerald-300 mb-3">Strategic Topics</h3>
              <ul className="space-y-2">
                {navigation.strategic.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-emerald-100 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700/30 my-8"></div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center">
          <div className="text-sm text-emerald-200">
            <span>© Homeworld Collective Inc {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
