import { useNavigation } from '@remix-run/react'
import { cn } from '~/utils/cn'

export function GlobalLoading() {
  const navigation = useNavigation()
  const isPending = navigation.state !== 'idle'

  return (
    <div className={cn('fixed inset-x-0 top-0', { hidden: !isPending })}>
      <div className="h-0.5 w-full overflow-hidden bg-muted">
        <div className="size-full origin-left-right animate-progress bg-muted-foreground" />
      </div>
    </div>
  )
}
