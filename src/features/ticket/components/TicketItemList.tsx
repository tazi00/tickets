import React from 'react';
import TicketItem from './TicketItem';
import { getTickets } from '../queries/getTickets';
import { db } from '@/db';

async function TicketItemList() {
  const ticketsData = await getTickets();

  return (
    <div className="grid place-content-center place-items-center grid-cols-1 space-y-3 mt-10">
      {ticketsData.map((ticket) => {
        return <TicketItem key={ticket.id} ticket={ticket} />;
      })}
    </div>
  );
}

export default TicketItemList;
