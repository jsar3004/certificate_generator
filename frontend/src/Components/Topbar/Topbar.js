import React from "react";
 import '../Topbar/Topbar.css';
 import { useState } from "react";

function TopBar() {
    const [dis,setdis]=useState(window.innerHeight<=800?false:true);
    return (
     <>
       <nav className="navbar">
        <div className="brand-title">Brand Name</div>
        <a href="#/" className="toggle-button" onClick={()=>setdis(!dis)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div class="navbar-links">
            {
                dis?(
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/">About</a></li>
            <li><a href="#/">Contact</a></li>
          </ul>
                ):""
            }
        </div>
      </nav>
      
     </>
    );
  }
  
  export default TopBar;