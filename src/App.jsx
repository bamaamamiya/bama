import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Start from './components/Start/Start';
import Profil from './components/MainContent/Profile';
// navbar
import Navbar from './components/Navbar/Navbar';
import Player from './components/Navbar/List/Player/Player';
import Quest from './components/Navbar/List/Quest/Quest';
import Book from './components/Navbar/List/Book/Book';

// footer
import Footer from './components/Footer/Footer';
import Achievements from './components/Navbar/List/Achievements/Achievements';
import StoryMode from './components/Navbar/List/Story Mode/StoryMode';
import Inventory from './components/Navbar/List/Inventory/Inventory';


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
          {/* elemnt bru */}
          <Route path="/" element={<Achievements />} />
          <Route path="/" element={<StoryMode />} />
          <Route path="/" element={<Inventory />} />
          {/* end */}
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
