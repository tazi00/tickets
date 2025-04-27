import React from 'react';

import CardWrapper from '@/components/CardWrapper';
import TicketForm from '@/features/ticket/components/TicketForm';
import { getTicket } from '@/features/ticket/queries/getTicket';

async function EditTicketPage({ params }: { params: Promise<{ ticketId: string }> }) {
  const ticketID = (await params).ticketId;
  const ticket = await getTicket(ticketID);
  console.log(ticket);

  return (
    <section className="ticket-sec mt-10">
      <div className="container mx-auto">
        <div className="w-full max-w-[400px] mx-auto">
          <CardWrapper title="Edit Ticket" description="please fill the details">
            <TicketForm
              mode="Edit"
              ticket={{
                id: ticket?.id ?? '',
                title: ticket?.name ?? '',
                content: ticket?.content ?? '',
              }}
            />
          </CardWrapper>
        </div>
      </div>
    </section>
  );
}

export default EditTicketPage;
