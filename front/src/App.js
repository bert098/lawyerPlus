import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import HomePage from "./components/HomePage"
import Navbar from './components/NavBar/Navbar';
import {useState } from 'react';



function App() {
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
     <Navbar auth={auth} setAuth={setAuth}/>
      <Routes>
        <Route path="/login" element={<Auth setAuth={setAuth} />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App