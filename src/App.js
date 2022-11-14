import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Services from "./components/pages/services";
import Achivement from "./components/pages/achivement";
import {BrowserRouter as Router, Link, Route, Routes, Switch, useParams} from 'react-router-dom';
import About from "./components/pages/about";
import Career from "./components/pages/career";
function App() {
  return (
    <>
    <Nav/>
    <Routes>
    <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/achivement" element={<Achivement/>}></Route>
      <Route path="/career" element={<Career/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
