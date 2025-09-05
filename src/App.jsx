import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import HomeMain from './components/HomeMain'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Blogs from './components/Blogs';
import BlogDetails from './Pages/BlogDeatails';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
