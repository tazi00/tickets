'use client';

import Link from 'next/link';
import React from 'react';

import Placeholder from '@/components/Placeholder';
import { ticketsPath } from '@/utils/paths';

function TicketError() {
  return (
    <Placeholder msg="There is Something Error">
      <Link href={ticketsPath} className="underline underline-offset-5">
        Go To Tickets
      </Link>
    </Placeholder>
  );
}

export default TicketError;
