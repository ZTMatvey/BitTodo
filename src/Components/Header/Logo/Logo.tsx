import React from 'react'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <div className={styles.logo__main}>Bit</div>
        <div className={styles.logo__sub}>todo</div>
    </div>
  )
}

export default Logo