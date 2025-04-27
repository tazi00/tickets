import { db } from '@/db';
import { ticket } from '@/db/schemas';
import { eq } from 'drizzle-orm';

export async function getTicket(id: string) {
  return await db.query.ticket.findFirst({
    where: eq(ticket.id, id),
  });
}
