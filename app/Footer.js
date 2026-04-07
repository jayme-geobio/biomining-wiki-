'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ContributeModal from './components/ContributeModal';
import NewsletterModal from './components/NewsletterModal';

export default function Footer() {
  const [showContribute, setShowContribute] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
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
        { name: 'Core Glossary', href: '/glossary' },
        { name: 'References', href: '/citations' },
      ],
    },
  };

  return (
    <div className="flex justify-center max-w-5xl mx-auto px-6 pb-6">
      <div className="w-full">
        <footer className="bg-[#0a3954] text-white rounded-2xl shadow-2xl px-6 sm:px-12 py-8 border border-white overflow-hidden">

          {/* Logo left, links right */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
            {/* Logo */}
            <a href="https://www.homeworld.bio" className="shrink-0">
              <img
                src="/images/homeworld-logo-full.png"
                alt="Homeworld Logo"
                className="h-14 -mt-1"
              />
            </a>

            {/* Nav sections — 2-col on small, full row on large */}
            <div className="lg:ml-auto grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6">
              {/* Home column */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Home</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
                  </li>
                </ul>
              </div>

              {Object.entries(sections).map(([key, section]) => (
                <div key={key}>
                  <h4 className="text-sm font-semibold text-white mb-3">{section.name}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Get Involved column */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Get Involved</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => setShowContribute(true)} className="text-sm text-gray-300 hover:text-white transition-colors">Contribute</button>
                  </li>
                  <li>
                    <button onClick={() => setShowNewsletter(true)} className="text-sm text-gray-300 hover:text-white transition-colors">Newsletter Sign Up</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-5" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-500">
            <span>© Homeworld Collective Inc {new Date().getFullYear()}  |  <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></span>
            <span>Bridging biology and mining for critical mineral recovery.</span>
          </div>

        </footer>
      </div>

      <ContributeModal isOpen={showContribute} onClose={() => setShowContribute(false)} />
      <NewsletterModal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
    </div>
  );
}
