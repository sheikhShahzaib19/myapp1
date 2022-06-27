import React from "react";
import './Menubar.css';
import web from "../src/images/myimg.jpg"
// import { NavLink } from "react-router-dom";
import Common from './Common'

const Home =()=>{
    return (
        <>
        <Common name="We are the team of talented developer making websites."
        imgsrc={web}
        visit="./services"
        btname="Get started"/>

   {/* <Common name="We are the team of talented man."
        imgsrc={web}
        visit="./contact"
        btname="Get started"/> */}
        </>
    )
}
export default Home;