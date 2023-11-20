import React from 'react'
import { Link } from "react-router-dom";

const SideComponent = ({
    icon,
    name,
    routename,
}) => {
  return (
    <Link
        to={routename}
    >
        <div className='flex flex-row gap-4 items-center hover:bg-slate-300 pl-1 py-2 rounded-md'>
            {icon}
            <p className='text-sm'>{name}</p>
        </div>
    </Link>
  )
}

export default SideComponent