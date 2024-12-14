import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Events from './pages/Events';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <div className=''>
    <div className='mx-auto container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    </div>
    </>
  );
}

export default App;
