'use client';

import { ThemeProvider as Theme } from 'next-themes';
import type { ReactNode } from 'react';
import React from 'react';

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Theme attribute="class" defaultTheme="system" enableSystem>
      {children}
    </Theme>
  );
}

export default ThemeProvider;
