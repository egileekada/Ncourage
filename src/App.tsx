import React from 'react';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import GalleryPage from './pages/GalleryPage';
import HomePage from "./pages/HomePage";
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>   
      <Routes>   
          <Route path='/' element={<HomePage />}/> 
          <Route path='/shop' element={<ShopPage />}/> 
          <Route path='/gallery' element={<GalleryPage />}/>
          <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </Router>  
  );
}

export default App;
