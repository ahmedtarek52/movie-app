import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
  <>
   <div className="footer-basic">
      <footer>
            <div className="social">
            <i className='fab mx-1 fa-facebook '></i>
          <i className='fab mx-1 fa-instagram'></i>
          <i className='fab mx-1 fa-twitter'></i>
          <i className='fab mx-1 fa-spotify'></i>
          <i className='fab mx-1 fa-youtube'></i>
          </div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link href="#">Home</Link></li>
                <li className="list-inline-item"><Link href="#">Services</Link></li>
                <li className="list-inline-item"><Link href="#">About</Link></li>
                <li className="list-inline-item"><Link href="#">Terms</Link></li>
                <li className="list-inline-item"><Link href="#">Privacy Policy</Link></li>
            </ul>
            <p className="copyright">Nexo © 2024</p>
        </footer>
        </div>
  </>
  )
}
