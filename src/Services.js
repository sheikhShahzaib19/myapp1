// import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Card from './Card'
import Sdata from './Sdata'

const Services=()=>{
    return(
         <>
         <div className="container">
             <div className="my-5">
             <h1 className="text-center">Our Services</h1>
             </div>
           <div className="row mb-5">
               <div className="col-12">
                   <div className="row gy-4 ">
               {
                 Sdata.map((val,ind) => {
                 return <Card key={ind} imgsrc={val.imgsrc}
                   title={val.title} />
                 })
               }
  </div>
  </div>
             </div>
           </div>
         </>
    );
}
export default Services;