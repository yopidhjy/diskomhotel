import * as React from 'react'
import { cn } from '@/lib/utils'

interface PopoverProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

export function Popover({ open, onOpenChange, children }: PopoverProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen
  const setIsOpen = (value: boolean) => {
    if (isControlled) {
      onOpenChange?.(value)
    } else {
      setInternalOpen(value)
    }
  }

  return (
    <PopoverProvider value={{ isOpen, setIsOpen }}>
      {children}
    </PopoverProvider>
  )
}

interface PopoverTriggerProps {
  asChild?: boolean
  children: React.ReactNode
}

const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ asChild = false, children }, ref) => {
  const { setIsOpen } = React.useContext(PopoverContext) || {}

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement
    return React.cloneElement(child, {
      ref,
      onClick: () => setIsOpen?.(true),
    })
  }

  return (
    <button
      ref={ref}
      onClick={() => setIsOpen?.(true)}
      className="focus:outline-none"
    >
      {children}
    </button>
  )
})
PopoverTrigger.displayName = 'PopoverTrigger'

interface PopoverContentProps {
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  alignOffset?: number
  className?: string
  children: React.ReactNode
}

const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(({ align = 'center', side = 'bottom', sideOffset = 4, alignOffset = 0, className, children }, ref) => {
  const { isOpen, setIsOpen } = React.useContext(PopoverContext) || {}

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 z-50"
        onClick={() => setIsOpen?.(false)}
      />
      <div
        ref={ref}
        className={cn(
          'fixed z-50 w-auto rounded-md border bg-popover p-4 shadow-md animate-in fade-in-0 zoom-in-95',
          `data-[side=top]:slide-in-from-bottom-12`,
          `data-[side=bottom]:slide-in-from-top-12`,
          `data-[side=left]:slide-in-from-right-11`,
          `data-[side=right]:slide-in-from-left-21`,
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  )
})
PopoverContent.displayName = 'PopoverContent'

const PopoverContext = React.createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
} | null>(null)

function PopoverProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PopoverContext.Provider>
  )
}

// Re-export for convenience
export { Popover, PopoverTrigger, PopoverContent }