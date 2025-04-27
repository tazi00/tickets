import Placeholder from '@/components/Placeholder';
import { ticketsData } from '@/data/ticketsData';
import TicketItem from '@/features/ticket/components/TicketItem';
import { getTicket } from '@/features/ticket/queries/getTicket';
import { isValidUUID } from '@/utils/helpers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

type TicketProp = {
  params: Promise<{ ticketId: string }>;
};

async function TicketPage({ params }: TicketProp) {
  const ticketId = (await params).ticketId;

  if (!isValidUUID(ticketId)) {
    return (
      <Placeholder msg="Invalid Ticket ID">
        <Link href="/" className="underline underline-offset-5">
          Go To Home
        </Link>
      </Placeholder>
    );
  }

  const ticket = await getTicket(ticketId);
  console.log(ticket);

  if (!ticket) return notFound();

  return (
    <section className="ticket-sec mt-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <TicketItem ticket={ticket} isDetail={true} />
        </div>
      </div>
    </section>
  );
}

export default TicketPage;
