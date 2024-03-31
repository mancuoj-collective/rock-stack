import { Link } from '@nextui-org/react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <h1 className="font-serif text-3xl">
        Welcome to{' '}
        <Link
          className="text-3xl"
          href="https://remix.run/docs"
          color="foreground"
          underline="hover"
          isExternal
          showAnchorIcon
        >
          Remix
        </Link>
      </h1>
    </div>
  )
}
