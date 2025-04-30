import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Student Management System</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2025 Student Management System. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;