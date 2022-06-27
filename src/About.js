import React from "react";
import './Menubar.css';
import web from "../src/images/myimg.jpg"
// import { NavLink } from "react-router-dom";
import Common from './Common';

const About =()=>{
    return (
        <>
        <Common 
        name="Welcome to About page" 
        imgsrc={web} 
        visit='/contact' 
<<<<<<< HEAD
        btname="Contact "/>
=======
        btname="Contact Now"/>
>>>>>>> 2c093cd22c9efbda93d5ad9f0bc3df430624dc8a
        </>
    )
}
export default About;
