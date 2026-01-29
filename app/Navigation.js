'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Home, Microscope, Mountain, BookOpen } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home }
    ],
    learn: {
      name: 'Learn',
      icon: BookOpen,
      items: [
        { name: 'What Is Biomining?', href: '/what-is-biomining' },
        { name: 'Glossary', href: '/glossary' }
      ]
    },
    professionals: {
      name: 'For Professionals',
      icon: Microscope,
      items: [
        { name: 'For Biologists', href: '/for-biologists' },
        { name: 'For Miners', href: '/for-miners' }
      ]
    },
    resources: {
      name: 'Resources',
      icon: Mountain,
      items: [
        { name: 'Complex Materials', href: '/complex-materials' },
        { name: 'Flowsheets', href: '/flowsheets' },
        { name: 'Research', href: '/research' }
      ]
    }
  };

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 border-b border-emerald-700/30 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/homeworld-icon.png"
                alt="Homeworld"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white hidden sm:block">Biomining Wiki</span>
              <span className="text-xl font-bold text-white sm:hidden">Bio Wiki</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {/* Home */}
            <Link
              href={navigation.main[0].href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-100 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>{navigation.main[0].name}</span>
            </Link>

            {/* Dropdown Menus */}
            {Object.entries(navigation).filter(([key]) => key !== 'main').map(([key, section]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  onMouseEnter={() => setActiveDropdown(key)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-emerald-100 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === key && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-56 bg-slate-800 border border-emerald-700/30 rounded-lg shadow-xl py-2 animate-fadeIn"
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-emerald-100 hover:bg-emerald-700/20 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-emerald-100 hover:bg-white/10 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-emerald-700/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Home */}
            <Link
              href={navigation.main[0].href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-100 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>{navigation.main[0].name}</span>
            </Link>

            {/* Mobile Sections */}
            {Object.entries(navigation).filter(([key]) => key !== 'main').map(([key, section]) => (
              <div key={key} className="space-y-1">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-emerald-100 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <section.icon className="w-4 h-4" />
                    <span>{section.name}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile Dropdown Items */}
                {activeDropdown === key && (
                  <div className="ml-6 space-y-1 animate-fadeIn">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 rounded-lg text-sm text-emerald-200 hover:bg-white/10 hover:text-white transition-colors"
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}
