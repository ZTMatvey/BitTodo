import React from 'react'
import Register from './Register/Register'
import Styles from './Auth.module.scss'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login/Login'

const Auth = () => {
  const navigate = useNavigate();  
  return (
    <div className={Styles.wrapper}>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Routes>
    </div>
  )
}

export default Auth