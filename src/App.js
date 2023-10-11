import Transferdata from "./components/Transferdata";
import Course from "./components/course/Course";
import Login from "./components/login/Login";
import './components/transferdata.css'
import './components/course/c.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import './components/home/home.css'
import Book from "./components/experiment/Book";
import Bookview from "./components/experiment/Bookview";
import Product from "./components/product/Product";
import './components/product/product.css'
import Productv from "./components/product/Productv";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";


function App() {
  const[isloggedin,setIsloggedin]=useState(false);

  useEffect(()=>{
    const storevalue=localStorage.getItem("isloggedin");
    if(storevalue=="1")
    {
      setIsloggedin(true);
    }
  },[])
  const Logincheck=(u,p)=>{
    localStorage.setItem("isloggedin",'1');
    setIsloggedin(true);
  }
  const Logoutcheck=(event)=>{
    localStorage.setItem("isloggedin",'1');
    setIsloggedin(false);
  }
  
  
  return (
    <div>
      <React.Fragment>
        {!isloggedin && <Login checkLogin={Logincheck}/>}
        {isloggedin && <Home checkLogout={Logoutcheck}/>}
      </React.Fragment>
     <BrowserRouter> 
      <Routes>
        {/* <Route path={'/'} element={<Login/>}></Route>
        <Route path={'/course'} element={<Course/>}></Route>
        <Route path={'/Home'} element={<Home/>}></Route>
        <Route path={'/book'} element={<Book/>}></Route>
        <Route path={'/bookview'} element={<Bookview/>}></Route> */}
        <Route path={'/prd'} element={<Product></Product>}></Route>
        <Route path={'/prv'} element={<Productv></Productv>}></Route>
        <Route path={'/pdv'} element={<Header></Header>}></Route>
      </Routes>
      </BrowserRouter> 
      {/* <Course/> */}
      {/* <Login/> */}
      {/* <Transferdata usertype="Admin" username="rithin" password="1234556"/> */}
    </div>
  );
}

export default App;
