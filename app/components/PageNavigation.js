'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { name: 'About', href: '/' },
  { name: 'What Is Biomining?', href: '/what-is-biomining' },
  { name: 'Mining 101', href: '/for-biologists' },
  { name: 'Biology 101', href: '/for-miners' },
  { name: 'Complex Materials Playbook', href: '/complex-materials' },
  { name: 'Example Flowsheets', href: '/flowsheets' },
  { name: 'Technology Assessment', href: '/technology-evaluation' },
  { name: 'Frontier Challenges', href: '/research' },
  { name: 'Core Glossary', href: '/glossary' },
  { name: 'References', href: '/citations' },
];

export default function PageNavigation() {
  const pathname = usePathname();
  const currentIndex = pages.findIndex((p) => p.href === pathname);
  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="mt-12 flex justify-between items-start">
      {prev ? (
        <Link href={prev.href} className="group flex flex-col text-[#264563] hover:text-[#1e3450] transition-colors">
          <span className="text-xs text-[#264563]/50 mb-1">← Previous</span>
          <span className="text-base font-medium group-hover:underline">{prev.name}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={next.href} className="group flex flex-col items-end text-[#264563] hover:text-[#1e3450] transition-colors">
          <span className="text-xs text-[#264563]/50 mb-1">Up next →</span>
          <span className="text-base font-medium group-hover:underline">{next.name}</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
