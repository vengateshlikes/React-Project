import React from "react";
import Navbar from './pagess/Navbar'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from './pagess/Home';
import Product from './pagess/Products';
import About from './pagess/About';
import Signup from './pagess/signup';
import Awards from './pagess/Awards';


// import { Outlet } from "react-router-dom";
// import Aboutmother from "./pagess/Aboutmother";

import './App.css'
function App(){
return(  

   <Router> 
    <h1 className="App" >THE HOGWORDS</h1>  
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} /> 
      <Route path='product' element={<Product/>} /> 
        <Route path='Awards' element={<Awards/>}/>
         <Route path='About' element={<About/>}/>
          <Route path='*' element={<p>404 error</p>}/>
           <Route path='signup' element={<Signup/>}/>
         
     </Routes>

</Router> 
)    
    }
export default App;