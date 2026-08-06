import * as React from 'react'
import { cn } from '@/lib/utils'

export type CalendarMode = 'single' | 'multiple' | 'range'

interface CalendarProps {
  mode: CalendarMode
  selected: any
  onSelect: (date: any) => void
  disabled?: (date: Date) => boolean
  className?: string
  initialFocus?: boolean
}

export function Calendar({ 
  mode = 'single', 
  selected, 
  onSelect, 
  disabled, 
  className,
  initialFocus 
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const generateDays = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    const startDate = new Date(firstDay.setDate(1 - firstDay.getDay()))
    constendDate = new Date(lastDay.setDate(lastDay.getDate() + 6))
    
    const days = []
    const currentDate = new Date(startDate)
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return days
  }

  const handleSelect = (day: Date) => {
    if (disabled?.(day)) return
    onSelect(day)
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const days = generateDays()
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  return (
    <div className={cn('p-3 bg-background rounded-lg shadow-lg', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button 
          onClick={goToPreviousMonth}
          className="p-1 rounded-full hover:bg-accent/10"
        >
          ←
        </button>
        <h3 className="font-medium">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button 
          onClick={goToNextMonth}
          className="p-1 rounded-full hover:bg-accent/10"
        >
          →
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-xs text-muted-foreground mb-1">
        {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => (
          <div key={day} className="font-medium">{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isSelected = selected && selected.getTime() === day.getTime()
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth()
          const isToday = day.toDateString() === new Date().toDateString()
          
          return (
            <button
              key={index}
              onClick={() => handleSelect(day)}
              disabled={disabled?.(day)}
              className={cn(
                'aspect-square p-1 rounded text-sm',
                'hover:bg-accent/10',
                !isCurrentMonth && 'text-muted-foreground/50',
                isSelected && 'bg-accent text-accent-foreground',
                isToday && 'bg-primary text-primary-foreground',
                disabled?.(day) && 'cursor-not-allowed opacity-50'
              )}
            >
              {day.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}