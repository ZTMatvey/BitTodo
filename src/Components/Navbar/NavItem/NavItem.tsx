import React from 'react'
import Styles from './NavItem.module.scss'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
    content: string;
    link: string;
    icon?: string;
}

const setActive = ({ isActive }: { isActive: boolean }) => isActive ? `${Styles.active} ${Styles.item}` : Styles.item;

const NavItem: React.FC<NavItemProps> = ({ content, link, icon }) => {
    let iconRender;
    if(icon !== undefined)
        iconRender = <span className={`material-symbols-outlined ${Styles.icon}`}>{icon}</span>;
    <span className={`material-symbols-outlined ${Styles.icon}`}>
        {icon}
    </span>
    return (
        <NavLink to={link} className={setActive}>
            {iconRender}
            <span>
                {content}
            </span>
        </NavLink>
    )
}

export default NavItem