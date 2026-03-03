'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'What Is Biomining?', href: '/what-is-biomining' },
    { name: 'Glossary', href: '/glossary' },
    { name: 'For Biologists', href: '/for-biologists' },
    { name: 'For Miners', href: '/for-miners' },
    { name: 'Complex Materials', href: '/complex-materials' },
    { name: 'Flowsheets', href: '/flowsheets' },
    { name: 'Research', href: '/research' },
  ];

  return (
    /* Floating footer: centered, max-w-6xl to match nav and Essential Resources box */
    <div className="flex justify-center px-6 py-6 mt-10">
      <div className="w-full max-w-6xl">
        <footer className="bg-slate-900 text-white rounded-2xl shadow-2xl px-8 py-8">

          {/* Logo + Nav Links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <img
              src="/images/homeworld-logo-full.png"
              alt="Homeworld Logo"
              className="h-7"
            />
            <div className="flex flex-wrap gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/50 transition-colors"
                >
                  {item.name}
                </Link>
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
