import React from 'react'
import { useParams, useLocation } from "react-router-dom";

const Activity = ({}) => {
  let { state } = useLocation();
  console.log(state)
  return (
    <div>Activity, hello</div>
  )
}

export default Activity