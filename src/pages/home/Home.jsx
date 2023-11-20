import { AppBtn } from "../../components"
import { useOutletContext } from "react-router-dom";
import Task from "./components/Task";
import { useState, useEffect } from "react";


const Home = () => {
  const [setSearch, newData, handleDeleteTask, handleCheckedStatus] = useOutletContext();

  const todayDate = new Date().toISOString().split('T')[0];
  const matchingTasks = newData.flatMap(project => {
      const projectName = project.name || undefined;
      return project.tasks
        .filter(task => task['due date'] === todayDate)
        .map(task => ({ ...task, projectName }));
  });

  const updateCheckStatus = index => {
    const updateStatus = matchingTasks.map((task,currentIndex)=> 
      currentIndex === index 
        ? {...task, checked: !task?.checked}
        : task 
    )
    // setTasks(updateStatus)
    handleCheckedStatus(updateStatus)
  }

  const deleteTask = (index) => {
    const updatedTasks = matchingTasks.filter((_, currentIndex) => currentIndex !== index);
    // setTasks(updatedTasks);
    handleDeleteTask(updatedTasks);
  };
  return (
    <div>
      <div className="ml-14 max-w-2xl">
        <AppBtn
            title="Quick search..."
            color="text-zinc-500" 
            bgColor="bg-white"
            onClick={() => setSearch(true)}
            btnstyle="outline outline-2  outline-offset-2 outline-gray-200 hover:outline-gray-300 text-sm px-2 py-2 mt-6"
        />
      </div>
      <div className="flex items-center mt-8 ml-20">
        <div className="w-3/4 py-4 pl-20 flex flex-col gap-4">
          {
            matchingTasks.map((task,index)=>(
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
    </div>
  )
}

export default Home