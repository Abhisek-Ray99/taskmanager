import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from "react-router-dom";
import Task from '../activity/components/Task';

const AppProject = () => {
  let { state } = useLocation();
  const { project } = useParams();
  const [items, setItems] = useState([])
  const fetchProject = () =>{
    const data = state.map((item,index)=>{
      if(item.name === project){
        setItems(item.tasks)
      }
    })
  }
  useEffect(() => {
    fetchProject()
  })

  // const updateCheckStatus = index => {
  //   const updateStatus = tasks.map((task,currentIndex)=> 
  //     currentIndex === index 
  //       ? {...task, checked: !task?.checked}
  //       : task 
  //   )
  //   setTasks(updateStatus)
  //   handleCheckedStatus(updateStatus)
  // }
  // const deleteTask = (index) => {
  //   const updatedTasks = tasks.filter((_, currentIndex) => currentIndex !== index);
  //   setTasks(updatedTasks);
  //   handleDeleteTask(updatedTasks);
  // };
  
  return (
    <div className="flex items-center mt-8 ml-20">
        <div className="w-3/4 py-4 pl-20 flex flex-col gap-4">
          {
            state.map((task,index)=>(
              <Task
                key={index}
                isChecked={task?.checked}
                checkHandler={()=> updateCheckStatus(index)}
                taskTitle={task?.title}
                index={index}
                deleteHandler={()=> deleteTask(index)}
              />
            ))
          }
        </div>
      </div>
  )
}

export default AppProject