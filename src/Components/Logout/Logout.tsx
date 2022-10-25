import React, { useEffect } from 'react'
import { logout } from '../../Service/Redux/Reducers/AuthSlice';
import { useAppDispatch } from '../../Service/Redux/Reducers/Hooks'

const Logout = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(logout());
    });
    return (
        <div></div>
    )
}

export default Logout