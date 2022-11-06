import React from "react";
 import '../Topbar/Topbar.css';
 import { useState } from "react";

function TopBar() {
    const [dis,setdis]=useState(window.innerWidth<=800?false:true);
    return (
     <>
       <nav className="navbar">
        <div className="brand-title">Brand Name</div>
        <p className="toggle-button" onClick={()=>setdis(!dis)} >
          <img alt="button" src='https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png'></img>
        </p>
        <div className="navbar-links">
            {
                dis?(
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
                ):""
            }
        </div>
      </nav>
      
     </>
    );
  }
  
  export default TopBar;