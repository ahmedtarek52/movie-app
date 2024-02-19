import React from 'react'
import Nabbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout({userData , setuserData}) {
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem('userToken');
    setuserData(null);
    navigate('/login');
  }
  return (
    <>
    <Nabbar logOut={logOut} userData={userData}/> 
    <div className='container'>
    <Outlet></Outlet>
    </div>
    <Footer/>
    </>
  )
}
