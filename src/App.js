import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Pricing from './Pricing';
import Products from './Products';
import Partnersprogram from './Partnersprogram';
import Blog from './Blog';
import Contactus from './Contactus';
import Footer from './Footer';





function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/products' element={<Products />} />
          <Route path='/partners' element={<Partnersprogram />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path="*" element={<Navigate to='/' />} />

        </Routes>
        <Footer />
      </BrowserRouter>




    </>
  );
}

export default App;
