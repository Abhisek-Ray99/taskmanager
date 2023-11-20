import React from 'react'

const Search = ({
  placeholder,
  size
}) => {
  const style = `block w-full rounded-md border-0 py-1.5 text-gray-900 focus:outline-none text-2xl ${size}`;
  return (
    <input type="text" name="task" id="task" className={style} placeholder={placeholder} />
  )
}

export default Search