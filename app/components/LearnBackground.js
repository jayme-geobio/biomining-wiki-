'use client';

import { useEffect } from 'react';

export default function LearnBackground() {
  useEffect(() => {
    document.body.classList.add('learn-bg');

    return () => {
      document.body.classList.remove('learn-bg');
    };
  }, []);

  return null;
}
