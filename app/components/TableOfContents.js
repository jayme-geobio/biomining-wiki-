'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const chapters = [
  {
    number: 1,
    name: 'Home',
    pages: [
      { name: 'Home', href: '/' },
    ],
  },
  {
    number: 2,
    name: 'Learn',
    pages: [
      { name: 'What Is Biomining?', href: '/what-is-biomining' },
      { name: 'Mining 101', href: '/for-biologists' },
      { name: 'Biology 101', href: '/for-miners' },
      { name: 'Complex Materials Playbook', href: '/complex-materials' },
      { name: 'Example Flowsheets', href: '/flowsheets' },
    ],
  },
  {
    number: 3,
    name: 'For Professionals',
    pages: [
      { name: 'Technology Assessment', href: '/technology-evaluation' },
    ],
  },
  {
    number: 4,
    name: 'Resources',
    pages: [
      { name: 'Frontier Challenges', href: '/research' },
      { name: 'Core Glossary', href: '/glossary' },
      { name: 'References', href: '/citations' },
    ],
  },
];

// Flat list of all page hrefs for "up next" logic
const allPages = chapters.flatMap((ch) => ch.pages);

export default function TableOfContents() {
  const pathname = usePathname();
  const flatIndex = allPages.findIndex((p) => p.href === pathname);
  const nextHref = flatIndex >= 0 && flatIndex < allPages.length - 1 ? allPages[flatIndex + 1].href : null;

  return (
    <div className="hidden sm:flex flex-[1] rounded-3xl border-2 border-white shadow-xl flex-col justify-center px-6 py-6 bg-[#264563]/95">
      <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Navigation Guide</p>
      <nav className="space-y-2.5">
        {chapters.map((chapter) => (
          <div key={chapter.number}>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
              {chapter.number}. {chapter.name}
            </p>
            <div className="ml-3 space-y-0.5">
              {chapter.pages.map((page) => {
                const isCurrent = pathname === page.href;
                const isNext = page.href === nextHref;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`flex items-center text-sm transition-colors ${
                      isCurrent
                        ? 'text-white font-bold'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span>{page.name}</span>
                    {isCurrent && <span className="ml-auto">←</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
