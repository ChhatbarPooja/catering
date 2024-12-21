import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Events from './pages/Events';
import Menu from './pages/Menu';
import Pages from './pages/Pages';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <div className=''>
    <div className='mx-auto container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/catering" element={<Home />} />
          <Route path="/catering/about" element={<About />} />
          <Route path="/catering/services" element={<Services />} />
          <Route path="/catering/events" element={<Events />} />
          <Route path="/catering/menu" element={<Menu />} />
          <Route path="/catering/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    </div>
    </>
  );
}

export default App;
