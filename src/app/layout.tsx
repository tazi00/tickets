import { ticketsPath } from '@/utils/paths';
import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { LucideKanban } from 'lucide-react';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tickets',
  description: 'A Universal Ticket Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen grid grid-rows-[auto_1fr] text-primary-foreground`}
      >
        <Header />
        <main className="bg-primary">{children}</main>
      </body>
    </html>
  );
}
