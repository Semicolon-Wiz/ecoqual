'use client';

import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { useEffect, useRef, ReactNode, createContext, useContext, useState } from 'react';

interface LenisProviderProps {
  children: ReactNode;
}

type LenisContextType = {
  lenis: any | null;
  stopScroll: () => void;
  startScroll: () => void;
};

const LenisContext = createContext<LenisContextType | null>(null);

export function useLenisControl() {
  const context = useContext(LenisContext);
  if (!context) throw new Error('useLenisControl must be used inside SmoothScrollProvider');
  return context;
}

export default function SmoothScrollProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<LenisRef>(null);
  const [lenisInstance, setLenisInstance] = useState<any>(null);

  useEffect(() => {
    const raf = (time: number) => {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (lenisRef.current?.lenis && !lenisInstance) {
        setLenisInstance(lenisRef.current.lenis);
      }
    }, 100);
    return () => clearInterval(id);
  }, [lenisInstance]);

  const stopScroll = () => {
    lenisRef.current?.lenis?.stop();
    document.body.style.overflow = 'hidden';
  };

  const startScroll = () => {
    lenisRef.current?.lenis?.start();
    document.body.style.overflow = '';
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, stopScroll, startScroll }}>
      <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
}
