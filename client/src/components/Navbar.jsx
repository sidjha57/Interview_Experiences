import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Logo from "../img/Logo.png"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="search">
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="searchButton">
                <SearchIcon className='searchIcon'/>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="links">
          {/* <Link className='link' to="/?cat=banking">
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
          </Link> */}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar