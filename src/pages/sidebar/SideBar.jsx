import React from 'react'
import ProjectComponent from '../projects/components/ProjectComponent'
import { AppBtn } from '../../components'
import { Link } from "react-router-dom";


import { BeakerIcon, CalendarDaysIcon, ClockIcon, PlusIcon } from '@heroicons/react/24/outline'
import SideComponent from './components/SideComponent';

const SideBar = ({
    show,
    projects,
    showProject,
    data
}) => {
  return (
    <>
        <div className="fixed bg-gray-200 h-screen min-w-[22%]  shadow-indigo-500/40">
          <div className="mx-4 mt-20 px-2 py-2">
              <AppBtn 
                title="Create a new Task" 
                color="text-white" 
                bgColor="bg-indigo-500"
                btnstyle="hover:bg-indigo-600 px-8 py-3 cursor-pointer"
                onClick={show}
              />
          </div>
          <div className='flex flex-col px-6 pt-4'>
            <SideComponent 
              icon={<BeakerIcon className="h-5 w-5 text-red-500" />}
              routename="overdue" 
              name="Overdue" />
            <SideComponent 
              icon={<ClockIcon className="h-5 w-5 text-green-500"/>}
              routename="" 
              name="Today" />
            <SideComponent 
              icon={<CalendarDaysIcon className="h-5 w-5 text-purple-500"/>}
              routename="upcoming" 
              name="Upcoming" />
          </div>
          <div className="px-4 py-8">
            <div className="flex flex-row hover:bg-slate-300 pl-1 py-2 rounded-md items-center justify-between px-2">
                <Link to="projects" className='text-md font-semibold'>My Projects</Link>
                <div className='hover:bg-sky-500 hover:ring-sky-500 cursor-pointer rounded p-1 ring-1 ring-slate-900/5 shadow-lg' onClick={showProject}>
                  <PlusIcon className="h-4 w-4 text-black"  />
                </div>
            </div>
            <div className='flex flex-col'>
            {
              projects.map((project, index) => (
                <ProjectComponent key={index} projectname={project.name} data={data} />
              ))
            }
            </div>
          </div>
        </div>
    </>
  )
}

export default SideBar