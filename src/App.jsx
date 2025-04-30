import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import MyCourses from './components/MyCourses';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in when the app loads
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-5 text-center shadow-md">
        <h1 className="text-4xl font-bold">Student Management System</h1>
      </header>
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 shadow-md">
        <div className="flex justify-center space-x-6">
          {isAuthenticated ? (
            <>
              <Link to="/" className="text-white font-semibold hover:text-yellow-300">
                Home
              </Link>
              <Link to="/registration" className="text-white font-semibold hover:text-yellow-300">
                Course Registration
              </Link>
              <Link to="/my-courses" className="text-white font-semibold hover:text-yellow-300">
                My Courses
              </Link>
              <Link to="/contact" className="text-white font-semibold hover:text-yellow-300">
                Contact
              </Link>
              <Link to="/about" className="text-white font-semibold hover:text-yellow-300">
                About
              </Link>
              <button
                onClick={handleLogout}
                className="text-white font-semibold hover:text-yellow-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white font-semibold hover:text-yellow-300">
                Login
              </Link>
              <Link to="/register" className="text-white font-semibold hover:text-yellow-300">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      <main className="w-full min-h-screen bg-gray-100">
        <div className="flex justify-center items-center w-full h-full px-4">
          <div className="w-full max-w-6xl px-6 py-4">
            <Routes>
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<Register />} />
              {isAuthenticated ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/my-courses" element={<MyCourses />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
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
