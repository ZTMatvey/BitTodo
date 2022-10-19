import React from 'react'
import Styles from './Navbar.module.scss'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import IconNavItem from './IconNavItem/IconNavItem'
import { ClassNames } from '@emotion/react'

interface NavbarProps{
  isActive: boolean
}

const Navbar: React.FC<NavbarProps> = ({isActive}) => {
  return (
      <Nav card pills vertical color='dark' className={`${'bg-dark'} ${Styles.sidebar} ${isActive ? Styles.isActive : ''}`}>
        <NavItem>
          <IconNavItem link='/add-task' content='Добавить задачу' icon='add_task'/>
          <IconNavItem link='/all-tasks' content='Все задачи' icon='folder'/>
        </NavItem>
      </Nav>
  )
}

export default Navbar