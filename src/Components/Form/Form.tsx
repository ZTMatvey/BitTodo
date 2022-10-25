import React from 'react'
import Styles from './Form.module.scss'

interface FormProps {
    children: JSX.Element[]
    title: JSX.Element
}

const Form: React.FC<FormProps> = ({ children, title }) => {
    return (
        <>
            <span className={Styles.title}>{title}</span>
            <div className={Styles.form}>
                {children}
            </div>
        </>
    )
}

export default Form