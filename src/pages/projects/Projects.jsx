import React from 'react'
import { useOutletContext } from "react-router-dom";
import { AppBtn, SearchBar } from '../../components';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const {newData, handleDeleteTask, handleCheckedStatus, newproject, handleProjectModal} = useOutletContext();

  return (
    <div className='mt-12 ml-20 px-20'>
      <p className='font-mono font-semibold py-6'>My Projects</p>
      <div className='w-5/6 flex flex-row py-4 justify-between'>
        <SearchBar placeholder="Search projects" />
        <AppBtn 
          title="Add project" 
          bgColor="bg-zinc-200" 
          textstyle="text-sm px-2"
          btnstyle="hover:bg-zinc-300"
          color="text-gray-500" 
          onClick={handleProjectModal}  
          />
      </div>
      <div className='divide-y '>
        <p className='font-semibold text-sm pb-2 pt-2'>{newproject?.length ? `${newproject?.length} projects` : 'No Projects exists'}</p>
        <div className='py-4'>
          {
            newproject.map((project, index)=>(
              <ProjectCard projectname={project.name} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects