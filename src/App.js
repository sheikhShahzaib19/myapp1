import React from 'react';
import Home from './Home'
import About from './About'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar' 
import Contact from './Contact'
import Services from './Services';
import Footer from './Footer';

const App=()=> {
  return (
    <>
      <main>
      <Navbar/>
      <Routes>
     <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      {/* <Route path="/" element={<Navigate/>} /> */}
      </Routes>
      </main>
      <Footer/>
    </>
    // </BrowserRouter>
  );
}
// const Home =()=>{
//   return(
//     <div className='HomeStyle'>
//         <h1>Welcome to Home page</h1>
//     </div>
//   )
// }
export default App;
