import React, {useState} from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'

const CheckBox = ({
  checked,
  taskLable,
  handleCheck,
  index
})=>{
  const textClass = `${checked ? 'line-through text-gray-300': 'text-black'} ms-2 text-sm font-medium text-black`
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
  deleteHandler
})=>{
  const iconclass = `${isCompleted ? 'text-stone-700':'text-blue-500'} h-5 w-5`
  return(
    <div className='flex-none cursor-pointer' onClick={deleteHandler}>
      <TrashIcon className={iconclass} />
    </div>
  ) 
}

const Task = ({
    taskTitle,
    isChecked,
    checkHandler,
    index,
    deleteHandler
}) => {

  const taskclass = `flex flex-row items-center outline outline-1 rounded-lg p-2 ${isChecked ? 'outline-gray-200': 'outline-blue-500/50'}`
  return (
    <div className={taskclass}>
        <CheckBox 
          checked={isChecked}
          handleCheck={checkHandler} 
          index={index}
          taskLable={taskTitle} />
        <DeleteIcon isCompleted={isChecked} deleteHandler={deleteHandler} />
    </div>
  )
}

export default Task