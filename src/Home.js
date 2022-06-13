import React from "react";
import './Menubar.css';
import web from "../src/images/myimg.jpg"
import { NavLink } from "react-router-dom";
import Common from './Common'

const Home =()=>{
    return (
        <>
        <Common name="We are the team of talented developers making websites."
        imgsrc={web}
        visit="./service"
        btname="Get started"/>
        </>
    )
}
export default Home;