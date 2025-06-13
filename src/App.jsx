import React, { useEffect, useState  } from 'react';
import Login from './componenet/Auth/Login'
import EmployeeDashboard from './componenet/dashboard/EmployeeDashboard'
import AdminDashboard from './componenet/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'




const App = () => {

 useEffect(() => {
    getLocalStorage()
   }, )
  
  const [user, setUser] = useState(null)

const handleLogin = (email,password) => {
  if (email == 'admin@gmail.com' && password == '123') {
    setUser('admin');
   }
   else if (email == 'user@gmail.com' && password == '123') {
    setUser('employee');
   } 
   else {
    alert('Invalid email or password');

    }
  }



  return (
    <>
    {!user ?<Login  handleLogin={handleLogin}/> : ''}
    {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
   
    </>
  )
}

export default App