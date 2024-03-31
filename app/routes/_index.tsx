import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <h1 className="font-serif text-3xl">
        Welcome to{' '}
        <a target="_blank" href="https://remix.run/docs" rel="noreferrer" className="hover:underline">
          Remix
        </a>
      </h1>
    </div>
  )
}
