import { toSnakeCase } from 'drizzle-orm/casing';
import { sqliteTable, integer, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const session = sqliteTable('session', {
	id: text('id').primaryKey().notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at').notNull()
});

export const user = sqliteTable(
	'user',
	{
		id: text('id').primaryKey().notNull(),
		email: text('email').notNull().unique(),
		password: text('password').notNull()
	},
	(table) => {
		return {
			emailUnique: uniqueIndex('user_email_unique').on(table.email)
		};
	}
);

export const users = sqliteTable('users', {
	id: integer('id').primaryKey(),
	username: text('username').notNull(),
	email: text('email')
});

export const usuarios =  sqliteTable('usuarios', {
	id: text('id')
	.primaryKey()
	.$defaultFn(() => crypto.randomUUID()),
	nombre: text('nombre').notNull(),
	apellido: text('apellido').notNull(),
	email: text('email').notNull(),
	rol: text('rol').notNull(),
	password: text('password'),
	token: text('token'),
	resetToken: text("resetToken")
});

