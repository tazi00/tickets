import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { ticket } from '@/db/schemas';

export async function getTicket(id: string) {
  await new Promise((res) => setTimeout(res, 2000));
  return await db.query.ticket.findFirst({
    where: eq(ticket.id, id),
  });
}
