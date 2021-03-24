import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
 return (
   <div className="Navbar">
     <h1>Microblog</h1>
     <p>Get in the Rithm blogging!</p>
     <nav>
       <NavLink exact to="/">Blog</NavLink>
       <NavLink exact to="/new">Add a new post</NavLink>
     </nav>
   </div>
 )
}

export default NavBar;