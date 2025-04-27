import { db } from '@/db';
import { ticket } from '@/db/schemas';
import { asc, desc } from 'drizzle-orm';

export async function getTickets() {
  await new Promise((res) => setTimeout(res, 2000));
  return await db.query.ticket.findMany({
    columns: {
      id: true,
      name: true,
      content: true,
      status: true,
    },
    orderBy: asc(ticket.created_at),
  });
}
