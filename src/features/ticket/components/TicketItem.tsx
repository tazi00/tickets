'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { TICKET_ICONS } from '../constants';
import { ticketPath } from '@/utils/paths';
import { LucideSquareArrowOutUpRight, Trash } from 'lucide-react';
import { getTickets } from '../queries/getTickets';
import { getTicket } from '../queries/getTicket';
import { Button } from '@/components/ui/button';
import { deleteTicketById } from '../actions/deleteTicketById';

type TicketItemProp = {
  ticket: Awaited<ReturnType<typeof getTickets>>[number] | Awaited<ReturnType<typeof getTicket>>;
  isDetail?: boolean;
};

function TicketItem({ ticket, isDetail = false }: TicketItemProp) {
  let IconComponent;

  if (!ticket) return null;

  IconComponent = TICKET_ICONS[ticket.status];

  async function handleDelete(id: string) {
    await deleteTicketById(id);
  }

  return (
    <div
      className={cn('flex w-full gap-2 items-start ', {
        'max-w-[365px]': !isDetail,
        'max-w-full': isDetail,
      })}
    >
      <Card
        key={ticket.id}
        className="rounded-md bg-primary text-primary-foreground border-muted-foreground  gap-4 w-full  "
      >
        <CardHeader>
          <h2 className="text-xl flex gap-2 items-center">
            {' '}
            <IconComponent className="w-5 h-5" />
            {ticket.name}
          </h2>
        </CardHeader>
        <CardContent>
          <p
            className={cn('font-normal  text-sm', {
              'line-through': ticket.status === 'INACTIVE',
              'line-clamp-2': !isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>
      <div className="p-3 border border-muted-foreground rounded-md">
        <ul className="flex flex-col gap-3">
          <li>
            {!isDetail ? (
              <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight size={16} />
              </Link>
            ) : (
              <Button
                size={'icon'}
                className="cursor-pointer"
                onClick={() => handleDelete(ticket.id)}
              >
                <Trash size={16} />
              </Button>
            )}
          </li>
          {/* <li>
            <Link href={ticketPath(ticket.id)}>
              <LucideSquareArrowOutUpRight size={16} />
            </Link>
          </li>
          <li>
            <Link href={ticketPath(ticket.id)}>
              <LucideSquareArrowOutUpRight size={16} />
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default TicketItem;
