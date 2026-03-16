'use client';

import { useEffect } from 'react';

export default function ProfessionalsBackground() {
  useEffect(() => {
    document.body.classList.add('professionals-bg');

    return () => {
      document.body.classList.remove('professionals-bg');
    };
  }, []);

  return null;
}
