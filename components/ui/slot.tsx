import * as React from 'react'
import { cn } from '@/lib/utils'

type SlotProps = React.HTMLAttributes<HTMLDivElement>

const Slot = React.forwardRef<HTMLDivElement, SlotProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('', className)}
        {...props}
      />
    )
  }
)
Slot.displayName = 'Slot'

export { Slot }