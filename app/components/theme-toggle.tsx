import { Theme, useTheme } from 'remix-themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '~/components/ui/button'

export function ThemeToggle() {
  const [, setTheme] = useTheme()
  const toggleTheme = () => setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
