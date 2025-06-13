import React, { useEffect,  } from 'react';
import Login from './componenet/Auth/Login'
import EmployeeDashboard from './componenet/dashboard/EmployeeDashboard'
import AdminDashboard from './componenet/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'




const App = () => {

 useEffect(() => {
    getLocalStorage()
   }, )
  


  return (
    <>
    <Login />
    {/*<EmployeeDashboard />*/}
    {/*<AdminDashboard /> */}
   
    </>
  )
}

export default App