import React from "react";
import { ReactComponent as YourSvg1 } from './/svg files/icons8-facebook.svg';
import { ReactComponent as YourSvg2 } from ".//svg files/icons8-github.svg";
import { ReactComponent as YourSvg3 } from ".//svg files/icons8-google.svg";
import { ReactComponent as YourSvg4 } from ".//svg files/icons8-instagram.svg";
import { ReactComponent as YourSvg5 } from ".//svg files/icons8-linkedin.svg";
import { ReactComponent as YourSvg6 } from ".//svg files/icons8-twitter.svg";
import ".//css/flaticon.css";
import ".//css/ionicons.min.css";
import ".//css/style.css";
import ".//css/ionicons.min.css";



function Footer(){
    return(
        <>
        <footer class="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
  
  <div class="container pt-4">
    
    <section class="mb-4">
     
    <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"><YourSvg1/></a>
      

     
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"><YourSvg2/></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"><YourSvg3/></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"><YourSvg4/></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"><YourSvg5/></a>
      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"><YourSvg6/></a>
    </section>
   
  </div>
  
  
  <div class="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a class="text-dark" href="#">SargamInstitute.com</a>
  </div>
  </footer>
        
        </>
    )
}

export default Footer