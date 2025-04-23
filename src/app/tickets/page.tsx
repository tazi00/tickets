import { Card } from '@/components/ui/card';
import Heading from '@/components/Heading';
import { ticketsData } from '@/data/ticketsData';
import { cn } from '@/utils/helpers';
import { ticketPath, ticketsPath } from '@/utils/paths';
import Link from 'next/link';
import React from 'react';
import { TICKET_ICONS } from '@/features/ticket/constants';
import TicketItem from '@/features/ticket/components/TicketItem';

function TicketsPage() {
  return (
    <section className="pt-4">
      <div className="container mx-auto">
        <Heading title="Tickets" description="All Tickets in one Piece" />
        <div className="grid place-content-center place-items-center grid-cols-1 space-y-3 mt-10">
          {ticketsData.map((ticket) => {
            return <TicketItem key={ticket.id} ticket={ticket} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default TicketsPage;
