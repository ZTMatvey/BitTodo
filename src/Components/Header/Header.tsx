import React from 'react'
import AccountButton from './AccountButton/AccountButton';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.header}>
                <Logo />
                <AccountButton />
            </div>
        </header>
    )
}

export default Header