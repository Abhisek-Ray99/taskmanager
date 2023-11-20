import React, {useState} from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import Calendar from './Calendar'

const CheckBox = ({
  checked,
  taskLable,
  handleCheck,
  index,
  priority
})=>{
  const priorityColors = {
    Low: 'text-blue-600',
    Medium: 'text-yellow-600',
    High: 'text-red-600'
  };
  const textClass = `${checked ? 'line-through text-gray-300': priorityColors[priority]} ms-2 text-sm font-medium text-black`
  const inputClass = `w-4 h-4 text-blue-600  ${checked ? '' : ''}`
  return(
    <div className="flex items-center flex-1 cursor-pointer">
        <input 
          id={`checkbox-${index}`} 
          type="checkbox" 
          onChange={handleCheck}
          checked={checked} 
          className={inputClass} />
        <label htmlFor={`checkbox-${index}`} className={textClass}>{taskLable}</label>
    </div>
  )
}

const DeleteIcon = ({
  isCompleted,
  deleteHandler,
  priority
})=>{
  const priorityIcon = {
    Low: 'text-blue-600',
    Medium: 'text-yellow-600',
    High: 'text-red-600'
  };
  const iconclass = `${isCompleted ? 'text-gray-400 hover:text-gray-600': priorityIcon[priority]} h-5 w-5`
  return(
    <div className='flex-none cursor-pointer' onClick={deleteHandler}>
      <TrashIcon className={iconclass} />
    </div>
  ) 
}

const Task = ({
    taskTitle,
    dueDate,
    priority,
    isChecked,
    checkHandler,
    index,
    deleteHandler
}) => {
  var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const getDate = ()=>{
    let myDate = new Date(dueDate);
    return myDate.getDate();
  }
  const getmonth = ()=>{
    var myDate = new Date('2023-11-12');
    let val = myDate.getMonth() + 1
    return months[val-1]
  }
  const priorityColors = {
    Low: 'outline-blue-500/50',
    Medium: 'outline-yellow-400',
    High: 'outline-red-400'
  };

  const prioritybgColor = {
    Low: 'bg-blue-50',
    Medium: 'bg-yellow-50',
    High: 'bg-red-50'
  }

  const taskclass = `flex flex-col outline outline-1 rounded-lg p-2 ${isChecked ? 'outline-gray-200': `${priorityColors[priority]} ${prioritybgColor[priority]}`}`
  return (
    <div className={taskclass}>
        <div className='flex flex-row items-center'>
          <CheckBox 
            checked={isChecked}
            handleCheck={checkHandler} 
            index={index}
            priority={priority}
            taskLable={taskTitle} />
          <DeleteIcon isCompleted={isChecked} deleteHandler={deleteHandler} priority={priority} />
        </div>
        <div className='flex flex-row items-center ml-6'>
          <Calendar date={`${getDate()} ${getmonth()}`} priority={priority} checked={isChecked} />
        </div>
    </div>
  )
}

export default Task