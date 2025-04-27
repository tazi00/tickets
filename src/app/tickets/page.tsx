import React, { Suspense } from 'react';

import CardWrapper from '@/components/CardWrapper';
import Heading from '@/components/Heading';
import Spinner from '@/components/Spinner';
import TicketForm from '@/features/ticket/components/TicketForm';
import TicketItemList from '@/features/ticket/components/TicketItemList';

async function TicketsPage() {
  return (
    <section className="pt-4">
      <div className="container mx-auto">
        <Heading title="Tickets" description="All Tickets in one Piece" />
        <div className="max-w-[400px] w-full mt-10 mx-auto">
          <CardWrapper title="Create Ticket" description="please fill the details">
            <TicketForm />
          </CardWrapper>
        </div>
        <Suspense fallback={<Spinner />}>
          <TicketItemList />
        </Suspense>
      </div>
    </section>
  );
}

export default TicketsPage;
