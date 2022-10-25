import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Task from '../../Service/Task'
import TaskProp from '../../Service/TaskProp'
import Logout from '../Logout/Logout'
import AddGroup from '../Pages/AddGroup/AddGroup'
import AddNewTask from '../Pages/AddNewTask/AddNewTask'
import AllTasks from '../Pages/AllTasks/AllTasks'
import Groups from '../Pages/Groups/Groups'
import Styles from './Content.module.scss'

interface ContentProps{
}

const Content: React.FC<ContentProps> = ({}) => {
  return (
    <main className={Styles.content}>
      <Routes>
        <Route path='/add-task' element={<AddNewTask/>}/>
        <Route path='/all-tasks' element={<AllTasks/>}/>
        <Route path='/groups' element={<Groups/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/add-group' element={<AddGroup/>}/>
        <Route path="*" element={<Navigate to="/all-tasks" replace />} />
      </Routes>
    </main>
  )
}

export default Content