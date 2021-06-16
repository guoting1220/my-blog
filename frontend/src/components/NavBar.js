import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
 return (
   <div className="Navbar">
     <h1>MyBlog</h1>
     <p>My life, My memory...</p>
     <nav>
       <NavLink exact to="/">Blog</NavLink>
       <NavLink exact to="/new">Add a new post</NavLink>
     </nav>
   </div>
 )
}

export default NavBar;