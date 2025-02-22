import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '$lib/server/database/schema';

if (!env.TURSO_CONNECTION_URL) throw new Error('DATABASE_URL no fue definida en entorno');
if (!dev && !env.TURSO_AUTH_TOKEN)
	throw new Error('DATABASE_AUTH_TOKEN no fue definida en entorno');

const client = createClient({ url: env.TURSO_CONNECTION_URL, authToken: env.TURSO_AUTH_TOKEN });

export const db = drizzle(client, {schema ,casing: 'snake_case' });
