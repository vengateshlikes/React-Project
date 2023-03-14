 import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState,useEffect } from "react";

function Navbar(){
  const [sticky, setSticky]= useState(false)

  useEffect(()=>{
    const handleScroll =() => {
      setSticky(window.scrollY>0);
      console.log("its happen")
    }
    window.addEventListener("scroll",handleScroll);
    return()=> window.removeEventListener("scroll", handleScroll)
  })
return(

  <nav className={`${sticky ? "sticky" : ""}`}>
    <h1 className='logo'>
      <img className="logoimg" src="https://www.freepnglogos.com/uploads/vector-alphabet-f-letter-logo-png-2.png" alt="" />
    </h1>
    <ul type='none'  className="nav-links">
    
            
        <Link style={{textDecoration: 'none'}} to={'/'} > 
           <li className='home'>Home</li>
            </Link>       
  
        <Link style={{textDecoration: 'none'}} to={'/product'} className='product'>
            <li> Product </li>
            </Link>
  
        <Link style={{textDecoration: 'none'}} to ={'/Awards'} className='awards'>
            <li>Awards</li>
            </Link>
  
        <Link style={{textDecoration: 'none'}} to={'/About'} className='about'>
           <li>  About </li>
             </Link>
    
        <Link style={{textDecoration: 'none'}} to={'/signup'} className='signup'> 
        <li>Signup </li>
        </Link> 
 
  </ul>
  </nav>

)
    }
export default Navbar;

 