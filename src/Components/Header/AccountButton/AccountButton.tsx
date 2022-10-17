import React from 'react'
import styles from './AccountButton.module.scss'

const AccountButton = () => {
  return (
    <span className={`${"material-symbols-outlined"} ${styles.circle}`}>account_circle</span>
  )
}

export default AccountButton