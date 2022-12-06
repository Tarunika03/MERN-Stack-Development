import React from "react";
import {Routes , Route} from 'react-router-dom';
import Home from "../View/Home";
import Nav from "../Nav";
import About from "../View/About";
import Strings from "../View/Strings";
import Membranophones from "../View/Membranophones";
import Aerophones from "../View/Aerophones";
import Keys from "../View/Keys";
import Footer from "../footer";
import Sign from "../View/Sign-in";
import Signup from "../View/Sign-up";
import Contact from "../Contact/contact";


function Routing(){

    return(
        <>
        <Nav/>
        <Routes>
            <Route path= '/' element={<Signup/>}/>
            <Route path= '/signin' element={<Sign/>}/>
            <Route path= '/signup' element={<Signup/>}/>
            <Route path= '/home' element={<Home/>}/>
            <Route path= '/about' element={<About/>}/>
            <Route path= '/strings' element={<Strings/>}/>
            <Route path= '/membranophones' element={<Membranophones/>}/>
            <Route path= '/keys' element={<Keys/>}/>
            <Route path= '/aerophones' element={<Aerophones/>}/>
            <Route path= '/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
        </>
        
        
    )
}

export default Routing;