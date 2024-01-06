import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import ContactUs from './ContactUs';
import ContactPl from './ContactPl';
import ContactDe from './ContactDe';
import NoMatch from './NoMatch';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/services">Services</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/contact/us">Contact US</Link>
          </div>
          <div>
            <Link to="/contact/pl">Contact PL</Link>
          </div>
          <div>
            <Link to="/contact/de">Contact DE</Link>
          </div>
        </nav>

        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/us" element={<ContactUs />} />
          <Route path="/contact/pl" element={<ContactPl />} />
          <Route path="/contact/de" element={<ContactDe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
