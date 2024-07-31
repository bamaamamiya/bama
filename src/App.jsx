import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profil from './components/Profil/Profile';
import Navbar from './components/Navbar';
import Player from './components/Player/Player';
import Start from './components/Start/Start';
import Quest from './components/Quest/Quest';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';

function App() {
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch((error) => {
            console.log('ServiceWorker registration failed: ', error);
          });
      });
    }
  }, []);

  return (
    <div className="h-screen bg-black text-white">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/player" element={<Player />} />
          <Route path="/book" element={<Book />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
