
import Profil from './components/Profil/Profile'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Player from './components/Player/Player';
import Matrix from './components/Matrix/Matrix';
import Start from './components/Start/Start';
import Quest from './components/Quest/Quest';
import Book from './components/Book/Book';

// import './App.css'

function App() {
  return(
    <Router>
    <div className='h-screen bg-black text-white '>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/home' element={<Profil/>}></Route>
        <Route path='/quest' element={<Quest/>}></Route>
        <Route path='/player' element={<Player/>}></Route>
        <Route path='/book' element={<Book/>}></Route>
        <Route path='/matrix' element={<Matrix/>}></Route>
      </Routes>
      </div>
    </Router>
  )
}

export default App
