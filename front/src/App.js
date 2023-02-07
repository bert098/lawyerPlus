import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import HomePage from "./components/HomePage"
import Navbar from './components/NavBar/Navbar';
import MobileSideNav from "./components/NavBar/MobileSidenav"
import Footer from "./components/Footer/Footer"
import { useState, useEffect } from 'react';
import DashBoard from "./components/DashBoard"



function App() {
  const [width, setWidth] = useState (window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
    {isMobile ? <MobileSideNav/> : <Navbar auth={auth} setAuth={setAuth}/>}
      <Routes>
        <Route path="/login" element={<Auth setAuth={setAuth} />} />
        <Route path="/dashboard" element={<DashBoard auth={auth}/>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App