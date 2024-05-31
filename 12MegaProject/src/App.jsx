import React, { useEffect, useState } from 'react'
import {Header, Footer} from './components'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispath = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userdata) => {
        if(userdata){
          dispath(login({userdata}))
        }
        else{
          dispath(logout())
        }
    })
    .finally(() => setLoading(false)) 
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flew-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: 
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
