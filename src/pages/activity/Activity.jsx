import React, {useState} from 'react'
import { useParams,  useOutletContext } from "react-router-dom";
import Task from './components/Task';
import { AppBtn } from '../../components';

const Activity = ({}) => {
  const { activity } = useParams();
  const {setSearch, newData, handleDeleteTask, handleCheckedStatus} = useOutletContext();

  const [tasks, setTasks] = useState(newData)

  const todayDate = new Date().toISOString().split('T')[0];

  let matchingTasks;
  if(activity === "today"){
    matchingTasks = tasks.flatMap(project => {
      const projectName = project.name || undefined;
      return project.tasks
        .filter(task => task['due date'] === todayDate)
        .map(task => ({ ...task, projectName }));
    });
  }else if(activity === "overdue"){
    matchingTasks = tasks.flatMap(project => {
      const projectName = project.name || undefined;
      return project.tasks
        .filter(task => {
            const taskDueDate = new Date(task['due date']).toISOString().split('T')[0];
            return taskDueDate < todayDate;
        })
        .map(task => ({ ...task, projectName }));
    });
  }else if(activity === "upcoming"){
    matchingTasks = tasks.flatMap(project => {
      const projectName = project.name || undefined;
      return project.tasks
        .filter(task => new Date(task['due date']) > new Date(todayDate))
        .map(task => ({ ...task, projectName }));
    });
  }

  const updateCheckStatus = taskId => {
    const updatedProjects = tasks.map((project) => {
      const updatedTasks = project.tasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      );
      return { ...project, tasks: updatedTasks };
    });
    setTasks(updatedProjects)
    handleCheckedStatus(updatedProjects)
  }

  const deleteTask = (taskId) => {
    const updatedProjects = tasks.map((project) => {
      const updatedTasks = project.tasks.filter((task) => task.id !== taskId);
      return { ...project, tasks: updatedTasks };
    });
    setTasks(updatedProjects);
    handleDeleteTask(updatedProjects);
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
            matchingTasks.map((task,_)=>(
              <Task
                key={task?.id}
                isChecked={task?.checked}
                checkHandler={()=> updateCheckStatus(task?.id)}
                taskTitle={task?.title}
                dueDate={task['due date']}
                priority={task?.priority}
                index={task?.id}
                deleteHandler={()=> deleteTask(task?.id)}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Activity