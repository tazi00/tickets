'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider as Theme } from 'next-themes';

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Theme attribute={'class'} defaultTheme="system" enableSystem>
      {children}
    </Theme>
  );
}

export default ThemeProvider;
