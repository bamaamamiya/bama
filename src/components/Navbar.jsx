import './style.css'; // Impor file CSS di sini
import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faCloudMoon } from '@fortawesome/free-solid-svg-icons';

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
        <h1 className="ml-4 text-4xl font-semibold sm:justify-center ">BAMA</h1>
        <div className="sm:hidden flex items-center">
          <button
            className="mr-4 p-1 hover:bg-gray-950 hover:text-white rounded-xl hover:dark:bg-black dark:text-white hover:dark:text-black"
            onClick={swapMode}
          >
            {darkMode ? '⛅' : '🌙'}
          </button>
        </div>
      </div>
      <div className="w-full sm:w-auto flex items-center justify-center">
          <ul className="sm:flex sm:gap-4 m-3 text-2xl hidden">
            <li>
              <a>Learn</a>
            </li>
            <li>
              <a>Mind</a>
            </li>
            <li>
              <a>Progress</a>
            </li>
            <div className={darkMode ? 'dark' : ''}>
      <button
        
        onClick={swapMode}
      >
        {darkMode ? <FontAwesomeIcon icon={faCloudMoon}  /> : 
        
        <FontAwesomeIcon icon={faMoon} size="lg" flip='horizontal'/>}
      </button>
    </div>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
