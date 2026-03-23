'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [state, setState] = useState('visible');
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    setState('entering');

    const timer = requestAnimationFrame(() => {
      setState('visible');
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  const styles = {
    entering: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 1s ease-out, transform 1s ease-out',
    },
  };

  return (
    <div style={styles[state] || styles.visible}>
      {children}
    </div>
  );
}
