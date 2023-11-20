import React from 'react'

function AppBtn({
  title,
  bgColor,
  color,
  btnstyle,
  textstyle,
  icon,
  ...others   
}) {
  const buttonClasses = `flex rounded-md border border-transparent text-base font-medium cursor-pointer flex-row justify-center items-center ${bgColor} ${btnstyle}`
  const textClasses = `${color} ${textstyle}`
  return (
    <div 
      type="submit" 
      className={buttonClasses}
      {...others}
    >
      {icon}
      <p className={textClasses}>{title}</p>
    </div>
  )
}

export default AppBtn