import React from 'react'

function AppBtn({
  title,
  bgColor,
  color,
  btnstyle,
  textstyle,
  ...others   
}) {
  const buttonClasses = `flex w-full rounded-md border border-transparent ${bgColor} text-base font-medium ${btnstyle}`
  const textClasses = `${color} ${textstyle}`
  return (
    <div 
      type="submit" 
      className={buttonClasses}
      {...others}
    >
      <p className={textClasses}>{title}</p>
    </div>
  )
}

export default AppBtn