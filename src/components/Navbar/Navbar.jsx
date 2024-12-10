import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sm:flex sm:items-center sm:justify-between p-4 sticky top-0 z-40 bg-black">
            <div className="flex justify-between items-center w-full">
                <div className="ml-4 text-4xl font-semibold sm:justify-center">
                    <ul>
                        <li>
                            <Link to="/">BAMA</Link>
                        </li>
                    </ul>
                </div>
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2"
                        aria-label="Open menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`sm:flex sm:gap-4 m-3 text-2xl ${
                    isMenuOpen ? 'block' : 'hidden'
                }`}
            >
                <ul className="sm:flex sm:gap-4 sm:ml-auto border-b-2 border-t-2 md:border-none text-2xl">
                    <li className="text-end">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="text-end">
                        <Link to="/player">Player</Link>
                    </li>
                    {/* <li className='text-end'>
            <Link to='/'>Achievements</Link>
          </li>
          <li className='text-end'>
            <Link to='/inventory'>Inventory</Link>
          </li>
          <li className='text-end'>
            <Link to='/'>StoryMode</Link>
          </li>
          <li className='text-end'>
            <Link to='/quest'>Quest</Link>
          </li>
           */}
                    <li className="text-end">
                        <Link to="/book">Book</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
