'use client';

import { useEffect } from 'react';

export default function ResourcesBackground() {
  useEffect(() => {
    document.body.classList.add('resources-bg');

    return () => {
      document.body.classList.remove('resources-bg');
    };
  }, []);

  return null;
}
