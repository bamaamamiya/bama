import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// first page
import Start from './Pages/Start/Start';
import Profil from './Pages/MainContent/Profile';

// navbar
import Navbar from './Pages/Navbar/Navbar';
import Player from './Pages/Navbar/List/Player/Player';
import Quest from './Pages/Navbar/List/Quest/Quest';
import Book from './Pages/Navbar/List/Book/Book';

// footer
import Footer from './Pages/Footer/Footer';
import Achievements from './Pages/Navbar/List/Achievements/Achievements';
import StoryMode from './Pages/Navbar/List/Story Mode/StoryMode';
import Inventory from './Pages/Navbar/List/Inventory/Inventory';

// music
import MusicPlayer from './Pages/MusicPlayer';

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <Router>
				<Navbar/>
        <Routes>
          <Route path="/" element={<Start />} />
          {/* elemnt bru */}
          <Route path="/" element={<Achievements />} />
          <Route path="/" element={<StoryMode />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* end */}
          <Route path="/home" element={<Profil />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/player" element={<Player />} />
          <Route path="/book" element={<Book />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <div>
          <MusicPlayer />
        </div>
      </Router>
    </div>
  );
}

export default App;
