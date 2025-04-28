'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { db } from '@/db';
import { ticket } from '@/db/schemas';
import type { ActionStateType } from '@/types/FormActionTypes';
import { actionErrorHandler } from '@/utils/actionErrorHandler';
import { ticketsPath } from '@/utils/paths';

const createTicketSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

async function createTicket(_formState: ActionStateType, formData: FormData) {
  try {
    const data = createTicketSchema.parse({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    });

    await db.insert(ticket).values({
      name: data.title as string,
      content: data.content as string,
    });
  } catch (error) {
    return actionErrorHandler(error, formData);
  }
  revalidatePath(ticketsPath);
  return {
    message: 'Ticket created successfull',
  };
}

export { createTicket };
