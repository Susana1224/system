import { db } from '$lib/server/database/client'
import { usuarios } from '$lib/server/database/schema'
import { eq } from 'drizzle-orm'
import { redirect } from '@sveltejs/kit'

export const handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');

    // Verificar si hay sesión activa
    if (session) {
        const user = await db.select().from(usuarios).where(eq(usuarios.token, session));

        if (user && user.length > 0) {
            event.locals.user = user[0];

            // Si el usuario ya está autenticado y está intentando acceder a la página de login, redirigirlo a la landing page
            if (event.url.pathname === '/') {
                throw redirect(302, '/');
            }
        } else {
            // Eliminar la cookie si el token no es válido
            event.cookies.set('session', '', {
                path: '/',
                expires: new Date(0),
            });
        }
    }

    // Continuar con la resolución de la solicitud
    return await resolve(event);
};
