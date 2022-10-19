import React from 'react'
import Styles from './IconNavItem.module.scss'
import { NavLink, NavItem } from 'reactstrap'
import {Link} from 'react-router-dom'

interface IconNavItemProps {
    content: string;
    link: string;
    icon?: string;
}

const IconNavItem: React.FC<IconNavItemProps> = ({ content, link, icon }) => {
    let iconRender;
    if (icon !== undefined)
        iconRender = <span className={`material-symbols-outlined ${Styles.icon}`}>{icon}</span>;
    <span className={`material-symbols-outlined ${Styles.icon}`}>
        {icon}
    </span>
    return (
        <NavItem className={Styles.navItem}>
            <NavLink className={Styles.navItem} tag={Link} to={link}>
                {iconRender}
                {content}
            </NavLink>
        </NavItem>
    )
}

export default IconNavItem