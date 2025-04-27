'use server';

import { revalidatePath } from 'next/cache';

import { db } from '@/db';
import { ticket } from '@/db/schemas';
import { ticketsPath } from '@/utils/paths';

async function createTicket(formData: FormData) {
  const data = Object.fromEntries(formData);
  console.log(Object.fromEntries(formData));
  await db.insert(ticket).values({
    name: data.title as string,
    content: data.content as string,
  });

  revalidatePath(ticketsPath);
}

export { createTicket };
