import React from 'react'
import { logout } from '../../store/authSlice';
import authService from '../../store/authSlice';
import { useDispatch } from 'react-redux';

function LogoOut(){
    const dispath = useDispatch()
    const LogoutHandler = () => {
        authService.logout()
        .then(() => dispath(logout()))
    }

    return (
        <button 
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        >LogOut</button>
    )
}

export default LogoOut;