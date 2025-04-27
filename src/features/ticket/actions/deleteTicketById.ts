'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/db';
import { ticket } from '@/db/schemas';
import { ticketsPath } from '@/utils/paths';

async function deleteTicketById(id: string) {
  await db.delete(ticket).where(eq(ticket.id, id));
  revalidatePath(ticketsPath);
  redirect(ticketsPath);
}

export { deleteTicketById };
