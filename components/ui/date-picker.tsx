import * as React from 'react'
import { format, isToday } from 'date-fns'
import { id } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface DatePickerProps {
  selected: Date | undefined
  onSelect: (date: Date | undefined) => void
  disabledDays?: (date: Date) => boolean
  className?: string
}

export function DatePicker({
  selected,
  onSelect,
  disabledDays,
  className,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !selected && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? format(selected, 'dd MMM yyyy', { locale: id }) : 'Pilih tanggal'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onSelect}
          disabled={(date) =>
            disabledDays?.(date) ?? date < isToday(new Date())
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}