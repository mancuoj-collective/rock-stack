import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <h1 className="text-3xl font-serif text-slate-700">
        Welcome to{' '}
        <a target="_blank" href="https://remix.run/docs" rel="noreferrer" className="hover:underline">
          Remix
        </a>
      </h1>
    </div>
  )
}
