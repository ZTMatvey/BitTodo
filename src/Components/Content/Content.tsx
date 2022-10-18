import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Task from '../../Service/Task'
import AddNewTask from '../Pages/AddNewTask/AddNewTask'
import AllTasks from '../Pages/AllTasks/AllTasks'
import Styles from './Content.module.scss'

interface ContentProps{
  tasks: Task[];
}

const Content: React.FC<ContentProps> = ({tasks}) => {
  return (
    <main className={Styles.content}>
      <Routes>
        <Route path='/add-new-task' element={<AddNewTask/>}/>
        <Route path='/all-tasks' element={<AllTasks tasks={tasks}/>}/>
      </Routes>
    </main>
  )
}

export default Content