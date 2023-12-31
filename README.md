## Task Manager Application

## Overview of the application.

**Note**: After creating a task, you can navigate to Today in the sidebar to view the created task. 

### Requirements
1. used **uuid** package to identify each task as unique.
2. For UI styling purposes, use **tailwind CSS**.
3. added **react-router-dom** to manage routing based on the task.
4. used **heroicon** for the icon purpose.
5. **JSONforms**: to manage forms easily without any state-creation 

### Features
1. Visit the /today route to find all the tasks created today. same as follows for overdue and upcoming based on the date
2. Create a task with a task name, description, date of completion, priority, and project.
3. create project
4. Task Color will changes based on the priority, **e.g**
  - low -> Blue
  - medium -> Yellow
  - high -> Red

### ScreenShots

![Screenshot 2023-11-20 234950](https://github.com/Abhisek-Ray99/taskmanager/assets/66687450/8d7da115-7a09-4a40-a946-dfbbb9dd45db)

![Screenshot 2023-11-20 235121](https://github.com/Abhisek-Ray99/taskmanager/assets/66687450/b62d7408-c081-4687-8c69-c0f1fd665a40)

![Screenshot 2023-11-20 235327](https://github.com/Abhisek-Ray99/taskmanager/assets/66687450/efe64684-f115-47a2-8afb-68d0218be762)

![Screenshot 2023-11-20 235412](https://github.com/Abhisek-Ray99/taskmanager/assets/66687450/e555a516-4dd2-458b-8981-4102b92579f1)

![Screenshot 2023-11-20 235504](https://github.com/Abhisek-Ray99/taskmanager/assets/66687450/a1ea9658-023d-4cb4-8b0d-47ebd92bea04)


## Steps to install dependencies and run the application locally.
1. Run react locally Project with React
- Start create a new project with vite react
`npm create vite@latest` or `yarn create vite` 
and choose react template to get started
- run the project by the following command
  `npm run dev` or `yarn run dev`
- visit **http://localhost:5173/** to find the web applicaiton.

2. Setup Tailwind CSS for the project
  - Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.
    ```
    npm install -D tailwindcss
    npx tailwindcss init
    ```
  - Add the paths to all of your template files in your tailwind.config.js file.
    ```
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    ```
  - Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
    ```
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    ```
  - Here we go we installed tailwindcss. now can start your server by **`yarn run dev`**



