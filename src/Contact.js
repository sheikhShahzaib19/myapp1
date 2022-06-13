
// import { getValue } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";
import './Menubar.css';

const Contact =()=>{

    const [data,setData]=useState({
       fullname:"",
       phone:"",
       email:"",
       msg:"",
    });
 
const InputEvent=(event)=>{
      const { name, value}=event.target;
    
setData((preVal) =>{
 return {...preVal,
     [name]:value, 
};
});
  };
    const formSubmit=(e)=>{
      e.preventDefault();
      alert(
        `Yor name is ${data.fullname} and your phone number is ${data.phone} and your email is ${data.email} and your message is ${data.msg}`);
    };

    return (
        <>
        <div className="text-center my-4">
        <h1>Contact Us</h1>
        </div>
       <div className="container">
            <div className='row'>
            <div className="col-md-6 col-12 mx-auto">
        <form onSubmit={formSubmit}>
     <div className="mb-3">

  <label>Username</label>
  <input type="text" className="form-control" 
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Enter your name" required/>
</div>

<div className="mb-3">
 <label>Phone number</label>
  <input type="text" className="form-control" 
  name="phone"
  value={data.phone}
  onChange={InputEvent}
  placeholder="Enter your mobile" required/>

</div>

<div className="mb-3">
<label>Email address</label>
  <input type="email" className="form-control"
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="Enter your email" required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control " rows="3" name="msg"
  value={data.msg}
  onChange={InputEvent} required>
    <div className="loader"></div>
  </textarea>
</div>
<button class="btn btn-outline-primary mb-3" type="submit">Submit</button>

</form>
</div>
            </div>
            </div>
                {/* </div>
            </div> */}
        </>
    )
}
export default Contact;