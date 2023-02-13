import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Header/Main/Main';
import './App.css';
import Footer from './Components/Header/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Features from './Components/Header/Main/Features/Features';
import Contact from './Components/Header/Contact/Contact';



function App() {
  return(
  <>
    <Header/>
    <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/feature" element={<Features/>} />
       <Route path="/Contact" element={<Contact/>} /> 
    </Routes>
    <Footer/>
  </>
  )             
}

export default App; 
