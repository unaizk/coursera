import React from 'react'
import Header from './component/Header'
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const App = () => {
  return (
    <>
      <Header />
      <ToastContainer style={{marginTop : '50px'}}/>
      <Container className='my-2'>
        <Outlet />
      </Container>
      
    </>
  )
}

export default App
