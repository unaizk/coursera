import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store.js'
import {Provider} from 'react-redux'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import DashBoard from './screens/DashBoard.jsx'
import PrivateRoute from './component/PrivateRoute.jsx'
import CourseScreen from './screens/CourseScreen.jsx'


const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/course/:courseId' element={<CourseScreen />} />

      {/* Private Route */}
      <Route path='' element={<PrivateRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
      </Route>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
)
