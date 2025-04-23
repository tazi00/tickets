import Placeholder from '@/components/Placeholder';
import { ticketsData } from '@/data/ticketsData';
import TicketItem from '@/features/ticket/components/TicketItem';
import { ticketsPath } from '@/utils/paths';
import { Ticket } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type TicketProp = {
  params: Promise<{ ticketId: string }>;
};

async function TicketPage({ params }: TicketProp) {
  const ticketId = (await params).ticketId;
  const ticket = ticketsData.find((item) => Number(item.id) === Number(ticketId));

  if (!ticket) return <Placeholder />;
  return (
    <section className="ticket-sec mt-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <TicketItem ticket={ticket} isDetail={false} />
        </div>
      </div>
    </section>
  );
}

export default TicketPage;
