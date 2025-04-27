import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('User', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  bio: varchar('bio', { length: 255 }),
});
