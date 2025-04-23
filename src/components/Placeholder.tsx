import { ticketsPath } from '@/utils/paths';
import Link from 'next/link';
import React from 'react';

function Placeholder() {
  return (
    <div className="flex items-center flex-col gap-3 justify-center h-full">
      <h3>Sorry There is No Ticket With Id</h3>
      <Link href={ticketsPath} className="underline underline-offset-5">
        Go To Tickets
      </Link>
    </div>
  );
}

export default Placeholder;
