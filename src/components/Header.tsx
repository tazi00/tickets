import { ticketsPath } from '@/utils/paths';
import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="bg-primary  min-h-15 grid place-content-center grid-cols-1 border-b border-accent">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link href={'/'}>
              <h1 className="font-bold flex gap-1">
                {' '}
                <LucideKanban /> Tickets
              </h1>
            </Link>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link
                  href={ticketsPath}
                  className="px-3 py-1 inline-block bg-accent text-accent-foreground rounded-xs"
                >
                  Tickets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
