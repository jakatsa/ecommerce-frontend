import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import "./App.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { ProductDetails } from "./components/ProductDetails";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  function signOutUser() {
    signOut(auth).then(() => {
      localStorage.clear;
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  }
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="overflow-hidden">
      <Router>
        <nav className="flex justify-between items-center px-4 py-6 bg-gray-800 text-white">
          <Link to="/" className="text-xl font-semibold">
            Logo
          </Link>
          <div className="lg:hidden ">
            <button
              onClick={toggleMenu}
              className="block text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow nav items-center  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm lg:flex-grow sidebar">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
              >
                Home
              </Link>
              {!isAuth ? (
                <Link
                  to="/login"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
                >
                  Login
                </Link>
              ) : (
                <button onClick={signOutUser}>Logout</button>
              )}
              <Link
                to="/landingPage"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
              >
                Landing Page
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setisauth={setIsAuth} />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/Header" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
