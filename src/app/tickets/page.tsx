import React, { Suspense } from 'react';

import Heading from '@/components/Heading';
import Spinner from '@/components/Spinner';
import TicketItemList from '@/features/ticket/components/TicketItemList';

async function TicketsPage() {
  return (
    <section className="pt-4">
      <div className="container mx-auto">
        <Heading title="Tickets" description="All Tickets in one Piece" />
        <Suspense fallback={<Spinner />}>
          <TicketItemList />
        </Suspense>
      </div>
    </section>
  );
}

export default TicketsPage;
