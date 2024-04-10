import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '~/components/ui/button'

export default function Index() {
  return (
    <div className="relative size-full bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div className="flex h-dvh flex-col items-center justify-center gap-5">
        <h1 className="font-serif text-3xl font-bold">Welcome to Remix</h1>
        <div className="flex gap-3">
          <Button asChild>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Get Started
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a target="_blank" href="https://github.com/front-loop/rock-stack" rel="noreferrer">
              <GitHubLogoIcon className="mr-2 size-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
