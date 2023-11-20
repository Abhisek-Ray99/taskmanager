import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../pages/sidebar/SideBar'
import { AppBtn, Search, AppModal, DropDown } from '../components';
import formschema from '../services/schema.json'
import formuischema from '../services/uischema.json'
import projectschema from '../services/project-schema.json'
import projectuischema from '../services/project-uischema.json'
import { getDate } from '../utils';

import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from "@jsonforms/react";

const schema = formschema;
const uischema = formuischema;

const initialData = {
  "title": "",
  "description": " ",
  "due date": getDate(),
  "priority": "Low"
}

const initialproject = {
  "name": ""
}

const Layout = () => {
  const [data, setData] = useState(initialData);
  const [projectdata, setProjectdata] = useState(initialproject)

  const [newData, setnewData] = useState([])
  const [newproject, setNewproject] = useState([])

  const [chooseProject, setChooseProject] = useState(undefined)

  const handleDropDownSelect = (selectedValue) => {
    (selectedValue !== undefined) ? setChooseProject(selectedValue) : null
  };

  const addData = (currentData) => {
    if(chooseProject === undefined){
      const existingProjectIndex = newData.findIndex(
        (project) => !project.name
      );
      if (existingProjectIndex !== -1) {
        newData[existingProjectIndex].tasks.push({
          ...currentData,
          checked: false,
        });
      }else{
        newData.push({
          tasks:[{
            ...currentData,
            checked: false
          }]
        })
      }
    }else{
      const existingProjectIndex = newData.findIndex(
        (project) => project.name === chooseProject
      );
      if (existingProjectIndex !== -1) {
        newData[existingProjectIndex].tasks.push({
          ...currentData,
          checked: false,
        });
      }else{
        newData.push({
          name: chooseProject,
          tasks:[{
            ...currentData,
            checked: false
          }]
        })
      }
    }
    setData(initialData)
  }

  const addProject = (name)=>{
    setNewproject((prevProjects) => [
      ...prevProjects,
      name
    ]);
    setProjectdata(initialproject)
  }

  const handleDeleteTask = (updatedTasks) => {
    setnewData(updatedTasks);
  };
  const handleCheckedStatus = (updatedTasks) => {
    setnewData(updatedTasks)
  }

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false)
  const [project, setProject] = useState(false)

  const header = ()=>{
    if(search){
      return(
        <div className="grid grid-cols-1 divide-y">
          <div className="">
            <Search placeholder="Search a task" size="text-sm" />
          </div>
          <div className="">

          </div>
        </div>
      )
    }
    if(project){
      return(
        <div className="grid grid-cols-1 divide-y">
          <h1 className='text-xl'>Add Project</h1>
        </div>
      )
    }
  }

  const footer = ()=>{
    if(show || project){
      return(
        <view className="flex flex-row justify-between">
          <div>
            { show && <DropDown allProjectNames={newproject} onSelect={handleDropDownSelect}/>}
          </div>
          <div className='flex flex-row gap-3'>
            <AppBtn
              title="Cancel" 
              bgColor="bg-gray-200" 
              color="text-black" 
              hoverbg="bg-zinc-500" 
              btnstyle="text-sm w-24 min-w-fit px-2 py-2 cursor-pointer"
              onClick={() => {
                if(show) setShow(false)
                if(project) setProject(false)
              }} />
            <AppBtn 
              title={`${show ? 'Add task' : 'Add'}`} 
              bgColor={`bg-indigo-600 ${data?.title?.length || projectdata?.name?.length ? '' : 'opacity-25 cursor'}`}
              color="text-white" 
              btnstyle={`text-sm w-24 min-w-fit px-2 py-2 ${data?.title?.length || projectdata?.name?.length ?'cursor-pointer':'cursor-no-drop'}`}
              hoverbg="bg-indigo-500" 
              onClick={() => {
                if (data?.title?.length) {
                  addData(data);
                  setShow(false);
                }else if(projectdata?.name?.length){
                  addProject(projectdata) 
                  setProject(false)
                }
              }}
            />
          </div>
        </view>
      )
    }
  }

  return (
    <div className='flex flex-row'>
        <SideBar 
          projects={newproject} 
          show={() => setShow(true)} 
          showProject={()=> setProject(true)}
          data={newData}
        />
        <div className='w-full ml-80 mr-10'>
          <Outlet context={[setSearch, newData, handleDeleteTask, handleCheckedStatus]}/>
        </div>
        <AppModal 
          show={show || search || project}
          onClose={() => {
            if(show){
              setShow(false)
            }
            if(search){
              setSearch(false)
            }
            if(project){
              setProject(false)
            }
          }}
          header={header()}
          footer={footer()}>
          <view className="mx-52">
            { show && <JsonForms
              schema={schema}
              uischema={uischema}
              data={data}
              renderers={materialRenderers}
              cells={materialCells}
              onChange={({ data, errors }) => setData(data)}
            />}
            {
              project && <JsonForms
                schema={projectschema}
                uischema={projectuischema}
                data={projectdata}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ data, errors }) => setProjectdata(data)}
              />
            }
          </view>
        </AppModal>
    </div>
  )
}

export default Layout