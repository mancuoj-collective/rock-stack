import { createCookieSessionStorage } from '@remix-run/node'
import { createThemeSessionResolver } from 'remix-themes'
import { getRequiredEnvVar, isProduction } from '~/utils/misc'

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: [getRequiredEnvVar('SESSION_SECRET')],
    ...(isProduction ? { domain: getRequiredEnvVar('DOMAIN_NAME'), secure: true } : {}),
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)

export const { getSession, commitSession, destroySession } = sessionStorage
