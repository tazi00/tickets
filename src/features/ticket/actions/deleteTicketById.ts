'use server';

import { db } from '@/db';
import { ticket } from '@/db/schemas';
import { ticketPath, ticketsPath } from '@/utils/paths';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

async function deleteTicketById(id: string) {
  await db.delete(ticket).where(eq(ticket.id, id));

  redirect(ticketsPath);
}

export { deleteTicketById };
