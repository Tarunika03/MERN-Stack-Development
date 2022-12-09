import React from "react";
import {useNavigate} from "react-router-dom";



function Nav() {

  const navigate = useNavigate()

    return(
        <>
        
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" onClick={()=> navigate('/signin')}><img src="https://www.kindpng.com/picc/m/18-182927_transparent-musical-symbol-clipart-colorful-transparent-background-musical.png"  style={{height:"60px", borderRadius:"30px"}}/></a>
      <a class="navbar-brand" style={{color: "white"}}><b>Sargam</b></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" onClick={()=> navigate('/home')} style={{cursor: "pointer", color: window.location.href.includes('home')?'white':'rgba(255, 255, 255, 0.5)'}}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={()=> navigate('/about')} style={{cursor: "pointer",color: window.location.href.includes('about')?'white':'rgba(255, 255, 255, 0.5)'}}>About us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="courses" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: window.location.href.includes ('courses') ?'white':'rgba(255, 255, 255, 0.5)'}} break>
              Courses
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" onClick={()=> navigate('/strings')} >Strings</a>
              <a class="dropdown-item" onClick={()=> navigate('/membranophones')} >Membranophones</a>
              <a class="dropdown-item" onClick={()=> navigate('/keys')} >Keys</a>
              <a class="dropdown-item" onClick={()=> navigate('/Aerophones')} >Aerophones</a>
            </div>
          </li>
          <li class="nav-item" style={{color: window.location.href.includes('contact')?'white':'rgba(255, 255, 255, 0.5)'}}>
            <a class="nav-link"onClick={()=> navigate('/contact')} tabindex="-1" aria-disabled="true">Contact us</a>
          </li>
        </ul>
        <ul class="navbar-nav" style={{float : "left", justifyContent: "flex-end"}}>
          <li class="nav-link" onClick={()=> navigate('/signin')} style={{color: window.location.href.includes('signin')?'white':'rgba(255, 255, 255, 0.5)'}}>
            Sign-In
          </li>
          <li class="nav-link" onClick={()=> navigate('/signup')} style={{color: window.location.href.includes('signup')?'white':'rgba(255, 255, 255, 0.5)'}}>
            Sign-Up
          </li>
        </ul>
      </div>
    </nav>
        
        </>
    )
  
}

export default Nav;