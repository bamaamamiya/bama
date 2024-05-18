import './style.css'; // Impor file CSS di sini
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const swapMode = () => {
    setDarkMode(!darkMode);

    const body = document.body;
    body.classList.toggle('dark');
  }

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <nav className={` sm:flex sm:items-center sm:justify-between p-4 sticky top-0 z-40  ${darkMode ? 'dark' : ''}`}>
      <div className="flex justify-between items-center w-full">
        <a className="ml-4 text-4xl font-semibold sm:justify-center ">
        <Link to='/'>BAMA</Link>
        </a>
      </div>
      <div className="w-full sm:w-auto flex items-center justify-center">
          <ul className="sm:flex sm:gap-4 m-3 text-2xl hidden">
            <li>
              <Link to='/learn'>Learn</Link>
            </li>
            <li>
              <Link to='/mind'>Mind</Link>
            </li>
            <li>
              <Link to='/player'>Player</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
