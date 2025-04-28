'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { db } from '@/db';
import { ticket } from '@/db/schemas';
import type { ActionStateType } from '@/types/FormActionTypes';
import { actionErrorHandler } from '@/utils/actionErrorHandler';
import { ticketPath, ticketsPath } from '@/utils/paths';

const createTicketSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});
async function updateTicket(id: string, _formState: ActionStateType, formData: FormData) {
  try {
    const data = createTicketSchema.parse({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    });
    console.log(Object.fromEntries(formData));

    await db
      .update(ticket)
      .set({
        name: data.title as string,
        content: data.content as string,
      })
      .where(eq(ticket.id, id as string));
  } catch (error) {
    return actionErrorHandler(error, formData);
  }

  revalidatePath(ticketsPath);
  if (id) {
    redirect(ticketPath(id));
  }

  return {
    message: 'Ticket Edited SuccessFully',
  };
}

export { updateTicket };
