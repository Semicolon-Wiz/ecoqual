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
    if (!hash) {
      lenis.scrollTo(0);
      return;
    }

    // ⏳ Retry until element exists (max 2 seconds)
    let retries = 0;
    const interval = setInterval(() => {
      const target = document.querySelector(hash);
      if (target) {
        clearInterval(interval);
        console.log('🚀 Scrolling to', hash);
        lenis.scrollTo(target, { offset: -100, duration: 1.2 });
      } else {
        retries++;
        if (retries > 20) { // ~2 seconds at 100ms each
          clearInterval(interval);
          console.warn('❌ Element not found after waiting:', hash);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [pathname, searchParams, lenis]);

  return null;
}
