'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navigation = {
    learn: {
      name: 'Learn',
      items: [
        { name: 'What Is Biomining?', href: '/what-is-biomining' },
        { name: 'Glossary', href: '/glossary' }
      ]
    },
    professionals: {
      name: 'For Professionals',
      items: [
        { name: 'For Biologists', href: '/for-biologists' },
        { name: 'For Miners', href: '/for-miners' }
      ]
    },
    resources: {
      name: 'Resources',
      items: [
        { name: 'Complex Materials', href: '/complex-materials' },
        { name: 'Flowsheets', href: '/flowsheets' },
        { name: 'Research', href: '/research' }
      ]
    }
  };

  return (
    <div className="flex justify-center px-12 pt-10 pb-2">
      <div className="w-full">
        <nav
          className="bg-[#f9f7f1] border border-[#264563] shadow-lg rounded-2xl overflow-hidden"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="pl-0 pr-5 sm:pr-7">
            <div className="flex items-center justify-between h-[92px]">

              {/* Logo */}
              <Link href="/" className="flex items-center -space-x-5">
                <img src="/images/homeworld-icon.png" alt="Homeworld" className="w-28 h-28" />
                <span className="text-3xl font-bold text-[#264563] hidden sm:block">Biomining Wiki</span>
                <span className="text-3xl font-bold text-[#264563] sm:hidden">Bio Wiki</span>
              </Link>

              {/* Desktop links */}
              <div className="hidden md:flex md:items-center md:space-x-0.5 relative">
                <Link
                  href="/"
                  className="px-3.5 py-2 text-xl text-[#264563] hover:bg-gray-300/40 rounded-xl transition-colors"
                  onMouseEnter={() => setOpenDropdown(null)}
                >
                  Home
                </Link>

                {Object.entries(navigation).map(([key, section]) => (
                  <div key={key} onMouseEnter={() => setOpenDropdown(key)} className="relative">
                    <button className="flex items-center px-3.5 py-2 text-xl text-[#264563] hover:bg-gray-300/40 rounded-xl transition-colors">
                      <span>{section.name}</span>
                    </button>

                    {/* Vertical tick at text start */}
                    <div className={`absolute bottom-0 left-3.5 w-px h-2 bg-[#264563]/60 transition-opacity duration-300 ${openDropdown === key ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Dropdown items — absolutely positioned under this button, left-aligned with its text */}
                    <div className={`absolute top-full left-0 pt-2 transition-opacity duration-300 ${openDropdown === key ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <div className="flex flex-col gap-1.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="text-base text-[#264563] hover:underline transition-colors whitespace-nowrap"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Horizontal line */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-[#264563]/40 transition-opacity duration-300 ${openDropdown ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-xl text-[#264563] hover:bg-gray-300/40 transition-colors"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Expanding spacer — opens the nav box to reveal the absolutely positioned items */}
          <div
            className={`hidden md:block transition-[max-height,opacity] duration-300 ease-out ${
              openDropdown ? 'max-h-28 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {/* Fixed-height invisible spacer — same for all sections so box never shifts */}
            <div className="h-20" />
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden border-t border-[#264563]/30">
              <div className="px-3 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-xl text-lg text-[#264563] hover:bg-gray-300/40 transition-colors"
                >
                  Home
                </Link>

                {Object.entries(navigation).map(([key, section]) => (
                  <div key={key} className="space-y-1">
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-lg text-[#264563] hover:bg-gray-300/40 transition-colors"
                    >
                      <span>{section.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === key ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileDropdown === key && (
                      <div className="ml-4 space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 rounded-xl text-lg text-[#264563] hover:bg-gray-300/40 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
