import React from 'react'
import { Link } from 'react-router-dom'

export default function Nabbar({userData , logOut}) {
  return (
    <nav className='p-2 d-flex flex-md-row flex-column justify-content-between'>
      <div className="left-nav d-flex flex-md-row flex-column align-items-center">
        <h1 className='m-0 pe-3 text-danger'>nexo</h1>
        {userData ? <ul className='list-unstyled m-0 d-flex align-items-center '>
          <li className='px-2'><Link to="/">Home</Link></li>
          {/* <li className='px-2'><Link to="about">About</Link></li> */}
          <li className='px-2'><Link to="movies">Movies</Link></li>
          <li className='px-2'><Link to="tv">Tv</Link></li>
          <li className='px-2'><Link to="people">People</Link></li>
        </ul>:'' }
        
      </div>
      <div className="right-nav d-flex flex-md-row flex-column align-items-center">
        <div className='social-media'>
          <i className='fab mx-1 fa-facebook '></i>
          <i className='fab mx-1 fa-instagram'></i>
          <i className='fab mx-1 fa-twitter'></i>
          <i className='fab mx-1 fa-spotify'></i>
          <i className='fab mx-1 fa-youtube'></i>
        </div>
        <ul className='list-unstyled m-0 d-flex flex-md-row flex-column align-items-center '>
          
          {
            userData? 
            <>
            <li className='px-2 cursor-pointer' onClick={logOut}><span>LogOut</span></li>   
            <li className='px-2'><Link to="Profile">Profile</Link></li>
            </> :
            <>
            <li className='px-2'><Link to="login">Login</Link></li>
            <li className='px-2'><Link to="register">Register</Link></li>
            </>
          }
        
        </ul>
      </div>
    </nav>
  )
}
