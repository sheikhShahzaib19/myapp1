import React from "react";
import './Menubar.css';
import web from "../src/images/myimg.jpg"
import { NavLink } from "react-router-dom";
import Common from './Common';

const About =()=>{
    return (
        <>
        <Common 
        name="Welcome to About page" 
        imgsrc={web} 
        visit='/contact' 
        btname="Contact Now"/>
        </>
    )
}
export default About;
