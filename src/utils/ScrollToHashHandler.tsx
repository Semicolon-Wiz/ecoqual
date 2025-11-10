'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLenisControl } from './SmoothScroll';

export default function ScrollToHashHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { lenis } = useLenisControl();

  useEffect(() => {
    const hash = window.location.hash;
    if (!lenis) return;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          lenis.scrollTo(el, { offset: -100, duration: 1.2 });
        }, 300);
      }
    } else {
      lenis.scrollTo(0);
    }
  }, [pathname, searchParams, lenis]);

  return null;
}
