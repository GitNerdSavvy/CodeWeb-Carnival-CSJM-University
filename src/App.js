import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import {Club } from "./components/Club";
import Members from './components/Members';


function disableRightClick(event) {
  event.preventDefault();
}


 



function App() {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
     };
  },[]);


  useEffect(() => {
    
    document.addEventListener('contextmenu', disableRightClick);
    
    
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Club/>
      <Members/>
      <Footer />
    </div>
  );
}

export default App;
