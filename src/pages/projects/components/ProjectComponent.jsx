import React from 'react'
import { Link } from "react-router-dom";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

const ProjectComponent = ({
  projectname,
  data
}) => {
  return (
    <Link
        to={`project/${projectname}`}
        state={data} 
    >
      <div className='flex flex-row justify-between hover:bg-slate-300 px-4 py-1 rounded-md group'>
        <p className='text-violet-700'>{projectname}</p>
        <EllipsisHorizontalIcon className="h-6 w-6 text-black invisible group-hover:visible" />
      </div>
    </Link>
  )
}

export default ProjectComponent