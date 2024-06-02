import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from 'remix-themes'
import { GlobalLoading } from '~/components/global-loading'
import stylesheet from '~/styles/globals.css?url'
import { cn } from '~/utils/cn'
import { themeSessionResolver } from '~/utils/session.server'
import '@fontsource-variable/inter'
import '@fontsource-variable/source-serif-4'

export const meta: MetaFunction = () => [{ title: 'Rock Stack' }]

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪨</text></svg>',
  },
  { rel: 'stylesheet', href: stylesheet },
]

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  return { theme: getTheme() }
}

export function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()

  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className={cn('min-h-dvh font-sans antialiased')}>
        <GlobalLoading />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  )
}
