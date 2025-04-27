'use server';

import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

import { db } from '@/db';
import { ticket } from '@/db/schemas';
import { ticketsPath } from '@/utils/paths';

async function deleteTicketById(id: string) {
  await db.delete(ticket).where(eq(ticket.id, id));

  redirect(ticketsPath);
}

export { deleteTicketById };
