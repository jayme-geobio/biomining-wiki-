'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navRef = useRef(null);

  // Close desktop dropdown when clicking outside the nav
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    <div ref={navRef} className="flex justify-center px-6 pt-4 pb-2">
      <div className="w-full max-w-6xl">
        <nav className="bg-[#ededed] border border-gray-300/60 shadow-lg rounded-2xl">
          <div className="px-5 sm:px-7">
            <div className="flex items-center justify-between h-14">

              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2.5">
                <img src="/images/homeworld-icon.png" alt="Homeworld" className="w-6 h-6" />
                <span className="text-base font-semibold text-gray-900 hidden sm:block">Biomining Wiki</span>
                <span className="text-base font-semibold text-gray-900 sm:hidden">Bio Wiki</span>
              </Link>

              {/* Desktop links — click-based dropdowns */}
              <div className="hidden md:flex md:items-center md:space-x-0.5">
                <Link
                  href="/"
                  className="px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-300/40 rounded-xl transition-colors"
                >
                  Home
                </Link>

                {Object.entries(navigation).map(([key, section]) => (
                  <div key={key} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                      className="flex items-center gap-1 px-3.5 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-300/40 rounded-xl transition-colors"
                    >
                      <span>{section.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
                    </button>

                    {openDropdown === key && (
                      <div className="absolute top-full left-0 w-52 mt-1 z-50">
                        <div className="bg-[#ededed] border border-gray-300/60 rounded-xl shadow-lg py-1.5">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300/40 hover:text-gray-900 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:bg-gray-300/40 hover:text-gray-900 transition-colors"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu — click-based */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-300/50">
              <div className="px-3 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-300/40 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>

                {Object.entries(navigation).map(([key, section]) => (
                  <div key={key} className="space-y-1">
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-300/40 hover:text-gray-900 transition-colors"
                    >
                      <span>{section.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileDropdown === key ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileDropdown === key && (
                      <div className="ml-4 space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-300/40 hover:text-gray-900 transition-colors"
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
