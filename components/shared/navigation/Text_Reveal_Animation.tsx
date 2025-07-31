'use client';

import React, { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface CopyProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function Copy({
  children,
  delay = 0,
  duration = 1,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay,
        duration,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
