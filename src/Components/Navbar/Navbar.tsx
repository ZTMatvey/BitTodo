import React from 'react'
import Styles from './Navbar.module.scss'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import IconNavItem from './IconNavItem/IconNavItem'
import { ClassNames } from '@emotion/react'

interface NavbarProps {
  isActive: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isActive }) => {
  return (
    <Nav card pills vertical color='dark' className={`${'bg-dark'} ${Styles.sidebar} ${isActive ? Styles.isActive : ''}`}>
      <IconNavItem link='/add-task' content='Добавить задачу' icon='add_task' />
      <IconNavItem link='/all-tasks' content='Задачи' icon='splitscreen' />
      <IconNavItem link='/groups' content='Группы' icon='folder_copy' />
      <IconNavItem link='/logout' content='Выйти' icon='logout' />
    </Nav>
  )
}

export default Navbar