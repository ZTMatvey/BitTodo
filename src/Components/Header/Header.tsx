import React from 'react'
import AccountButton from './AccountButton/AccountButton';
import Styles from './Header.module.scss';
import Logo from './Logo/Logo';
import { Navbar, NavbarBrand, Button } from 'reactstrap'

interface HeaderProps{
    toggleSidebar(): void;
}

const Header: React.FC<HeaderProps> = ({toggleSidebar}) => {
    return (
        <Navbar color="dark" dark>
            <div className={Styles.header}>
                <div>
                    <span onClick={()=>toggleSidebar()} className={`${'material-symbols-outlined'} ${Styles.toggleSidebarBtn}`}>
                        menu
                    </span>
                    <NavbarBrand href="/">
                        <Logo />
                    </NavbarBrand>
                </div>
            </div>
        </Navbar>
    )
}

export default Header