import React from 'react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

const ProjectCard = ({
    projectname
}) => {
  return (
    <div className='w-5/6 my-2 p-2 bg-purple-100 rounded-lg cursor-pointer group flex flex-row justify-between utline-none hover:border-purple-800 border-transparent border hover:border-current'>
        <p className='text-purple-800 font-semibold hover:'>{projectname}</p>
        <div className=''>
          <EllipsisHorizontalIcon className="h-6 w-6 text-black invisible group-hover:visible" />
        </div>
    </div>
  )
}

export default ProjectCard