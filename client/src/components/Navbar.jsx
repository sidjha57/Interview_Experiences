import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Logo from "../img/logo.png"
import search from "../img/search-icon.png"
import TextField from "@mui/material/TextField";
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
        
        

        <div className="links">
          <div className='SearchBar'>
          <input type="text" class="search-hover" name="" placeholder="Search Here" />
          <button><img src={search} alt="" /></button>
          </div>
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