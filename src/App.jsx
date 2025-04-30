import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-5 text-center shadow-md">
        <h1 className="text-4xl font-bold">Student Management System</h1>
      </header>
      <nav className="bg-gradient-to-r  py-3 shadow-md">
        <div className="flex justify-center space-x-6">
          <Link to="/" className="text-green font-semibold hover:text-green-400">
            Home
          </Link>
          <Link to="/registration" className="text-green font-semibold hover:text-green-400">
            Registration
          </Link>
          <Link to="/contact" className="text-green font-semibold hover:text-green-400">
            Contact
          </Link>
          <Link to="/about" className="text-green font-semibold hover:text-green-400">
            About
          </Link>
        </div>
      </nav>
      <main className="w-full min-h-screen bg-gray-100">
        <div className="flex justify-center items-center w-full h-full px-4">  {/* This will center the content and stretch it */}
          <div className="w-full max-w-6xl px-6 py-4">  {/* Max width adjusted to 6xl */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white text-center py-4 w-full">
        <p>&copy; 2025 Student Management System. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
