
import Profil from './components/Profil/Profile'
import Navbar from './components/Navbar'
import Status from './components/Status/Status'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Learn from './components/Learn/Learn';
import Player from './components/Player/Player';
import Mind from './components/Mind/Mind';

// import './App.css'

function App() {
  return(
    <Router>
    <div className='h-screen bg-black text-white '>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Profil/>}></Route>
        <Route path='/learn' element={<Learn/>}></Route>
        <Route path='/player' element={<Player/>}></Route>
        <Route path='/mind' element={<Mind/>}></Route>
      </Routes>
      </div>
    </Router>
  )
}

export default App
