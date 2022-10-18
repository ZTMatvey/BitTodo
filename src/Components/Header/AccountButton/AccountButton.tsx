import React from 'react'
import Styles from './AccountButton.module.scss'

const AccountButton = () => {
  return (
    <img className={Styles.circle} src="https://sun1.userapi.com/sun1-98/s/v1/ig2/XHd6Lx_tBJXWFbU_brHg6IJYIRpQDWpXo3h14mFvUmUT5COk4u98TU37bnfM0Crl0NbCFcCHi9BjEptwo8hJW7g8.jpg?size=200x200&quality=95&crop=0,0,960,960&ava=1" alt="" />
    // <span className={`${"material-symbols-outlined"} ${Styles.circle}`}>account_circle</span>
  )
}

export default AccountButton