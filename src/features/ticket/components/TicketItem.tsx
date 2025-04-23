'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { TICKET_ICONS } from '../constants';
import { ticketPath, ticketsPath } from '@/utils/paths';
import { LucideSquareArrowOutDownRight, LucideSquareArrowOutUpRight, View } from 'lucide-react';

type TicketItemProp = { ticket: TicketType; isDetail?: boolean };

function TicketItem({ ticket, isDetail = true }: TicketItemProp) {
  const IconComponent = TICKET_ICONS[ticket.status];
  return (
    <div
      className={cn('flex w-full gap-2 items-start', {
        'max-w-[365px]': isDetail,
        'max-w-full': !isDetail,
      })}
    >
      <Card
        key={ticket.id}
        className="rounded-md bg-primary text-primary-foreground  gap-4 w-full  "
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
              'line-clamp-2': isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>
      {isDetail && (
        <div className="p-3 border border-accent rounded-md">
          <ul className="flex flex-col gap-3">
            <li>
              <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight size={16} />
              </Link>
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
      )}
    </div>
  );
}

export default TicketItem;
