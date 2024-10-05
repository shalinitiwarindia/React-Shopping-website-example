import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import MenCategory from './components/MenCategory'; // Import the new component
import WomenCategory from './components/WomenCategory';

function App() {
  return (
    
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/men/:category" element={<MenCategory />} /> {/* New Route */}
          // Add route

  {/* ... existing routes ... */}
  <Route path="/women/:category" element={<WomenCategory />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
