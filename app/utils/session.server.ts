import { createCookieSessionStorage } from '@remix-run/node'
import { createThemeSessionResolver } from 'remix-themes'

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: [process.env.SESSION_SECRET],
    ...(process.env.NODE_ENV === 'production' ? { domain: process.env.DOMAIN_NAME, secure: true } : {}),
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
