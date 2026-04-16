'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const chapters = [
  {
    number: 1,
    name: 'Introduction',
    pages: [
      { name: 'The Biomining Handbook', href: '/' },
    ],
  },
  {
    number: 2,
    name: 'Learn',
    pages: [
      { name: 'What Is Biomining?', href: '/what-is-biomining' },
      { name: 'Mining 101', href: '/mining-101' },
      { name: 'Biology 101', href: '/biology-101' },
      { name: 'Complex Materials Playbook', href: '/complex-materials' },
      { name: 'Example Flowsheets', href: '/flowsheets' },
    ],
  },
  {
    number: 3,
    name: 'For Professionals',
    pages: [
      { name: 'Technology Assessment', href: '/technology-assessment' },
    ],
  },
  {
    number: 4,
    name: 'Resources',
    pages: [
      { name: 'Frontier Challenges', href: '/frontier-challenges' },
      { name: 'Core Glossary', href: '/glossary' },
      { name: 'References', href: '/references' },
    ],
  },
];

// Flat list of all page hrefs for "up next" logic
const allPages = chapters.flatMap((ch) => ch.pages);

export default function TableOfContents({ bare = false }) {
  const pathname = usePathname();
  const flatIndex = allPages.findIndex((p) => p.href === pathname);
  const nextHref = flatIndex >= 0 && flatIndex < allPages.length - 1 ? allPages[flatIndex + 1].href : null;

  const containerClass = bare
    ? 'w-full h-full flex flex-col justify-center px-6 py-6'
    : 'hidden sm:flex flex-[1] rounded-3xl border-2 border-white shadow-xl flex-col justify-center px-6 py-6 bg-[#264563]/95';

  return (
    <div className={containerClass}>
      <p className="text-base font-semibold text-white uppercase tracking-wider mb-3">Handbook Roadmap</p>
      <nav className="space-y-2.5">
        {chapters.map((chapter) => (
          <div key={chapter.number}>
            <p className="text-sm font-normal text-white/50 uppercase tracking-wider mb-1">
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
                    className={`flex items-center text-base transition-colors ${
                      isCurrent
                        ? 'text-white font-bold'
                        : 'text-white/70 font-extralight hover:text-white'
                    }`}
                  >
                    <span>{page.name}</span>
                    {isCurrent && <span className={`ml-auto font-bold ${bare ? '-mr-0 sm:-mr-4 md:-mr-10 lg:-mr-20' : ''}`}>←</span>}
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
