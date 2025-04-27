'use client';

import Placeholder from '@/components/Placeholder';
import { ticketsPath } from '@/utils/paths';
import Link from 'next/link';
import React from 'react';

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
