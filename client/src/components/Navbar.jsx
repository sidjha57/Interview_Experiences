import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/Logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        
        <div className="links">
          <Link className='link' to="/?cat=banking">
            <h6>BANKING</h6>
          </Link>
          <Link className='link' to="/?cat=it">
            <h6>IT</h6>
          </Link>
          <Link className='link' to="/?cat=finance">
            <h6>Finance</h6>
          </Link>
          <Link className='link' to="/?cat=marketing">
            <h6>Marketing</h6>
          </Link>
          <Link className='link' to="/?cat=management">
            <h6>Management</h6>
          </Link>
          <Link className='link' to="/?cat=others">
            <h6>Others</h6>
          </Link>
          <span>Siddharth</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar