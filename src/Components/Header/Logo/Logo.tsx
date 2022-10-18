import React from 'react'
import Styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={Styles.logo}>
      <div className={Styles.largeLetters}>BTD</div>
      <div className={Styles.smallLetters}>
        <div className={Styles.text}>Bit</div>
        <div className={Styles.text}>todo</div>
      </div>
    </div>
  )
}

export default Logo