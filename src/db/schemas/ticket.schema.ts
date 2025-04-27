import { pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const rolesEnum = pgEnum('status', ['ACTIVE', 'INACTIVE', 'PROGRESS']);

export const ticket = pgTable('Ticket', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  content: varchar('content', { length: 255 }),
  status: rolesEnum().default('PROGRESS').notNull(),
  updated_at: timestamp().defaultNow(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp().defaultNow(),
});
