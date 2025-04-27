'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/db';
import { ticket } from '@/db/schemas';
import { ticketPath, ticketsPath } from '@/utils/paths';

async function updateTicket(id: string, formData: FormData) {
  const data = Object.fromEntries(formData);
  console.log(Object.fromEntries(formData));

  await db
    .update(ticket)
    .set({
      name: data.title as string,
      content: data.content as string,
    })
    .where(eq(ticket.id, id as string));

  revalidatePath(ticketsPath);
  redirect(ticketPath(id));
}

export { updateTicket };
