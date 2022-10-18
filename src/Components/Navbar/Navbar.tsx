import React from 'react'
import Styles from './Navbar.module.scss'
import NavItem from './NavItem/NavItem'

const Navbar = () => {
  return (
    <nav className={Styles.nav}>
      <NavItem link='/all-tasks' icon='today' content='Все задачи'/>
      <NavItem link='/add-new-task' icon='add_task' content='Добавить новую задачу'/>
      <NavItem link='/my-groups' icon='folder' content='Мои группы'/>
    </nav>
  )
}

export default Navbar