import React from "react";
import './Menubar.css';
import './Header.css';
// import web from "../src/images/myimg.jpg"
import { NavLink } from "react-router-dom";

const Common =(props)=>{
    return (
        <>
        {/* <Navbar/> */}
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
            <div className="col-10 mx-auto">    
            <div className="row">
             <div className="col-lg-8 col-md-8 col-6 pt-5 order-lg-1 justify-content-center flex-column">
                   
            <h1 className="mt-2 ">
                {props.name}
            </h1>
            {/* <h2 className="my-3">
               Grow your business with us
            </h2> */}
            <NavLink to={props.visit} className="mt-3 btn btn-outline-primary set">{props.btname} </NavLink>
            </div>
            <div className="col-lg-4 col-md-4 col-6 order-lg-1 mt-3 imgset">
              <img src={props.imgsrc} className="img-fluid animated" alt="Common flower" />
            </div>
            </div> 
            
            </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Common;