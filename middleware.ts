// lógica para proteger tus rutas. Esto impedirá que los usuarios accedan a las páginas 
// del panel a menos que hayan iniciado sesión.

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};