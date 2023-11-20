import { CalendarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Calendar = ({
    date,
    priority,
    checked
}) => {
  const priorityColors = {
    Low: 'text-blue-600',
    Medium: 'text-yellow-600',
    High: 'text-red-600'
  };
  return (
    <div className='flex flex-row gap-1 items-center'>
        <CalendarIcon className={`h-3 w-3 ${checked ? 'text-gray-300' : priorityColors[priority]}`}/>
        <p className={`text-xs text-blue-500 ${checked ? 'text-gray-400' : priorityColors[priority]}`}>{date}</p>
    </div>
  )
}

export default Calendar