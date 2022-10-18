import React from 'react'
import AccountButton from './AccountButton/AccountButton';
import Styles from './Header.module.scss';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <header className={Styles.headerWrapper}>
            <div className={Styles.header}>
                <Logo />
                <AccountButton />
            </div>
        </header>
    )
}

export default Header