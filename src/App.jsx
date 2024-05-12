import Profil from './components/Profil/Profile'
import Navbar from './components/Navbar'
// import './App.css'

function App() {
  return(
    <div className='h-full'>
    <Navbar/>
        <div className='h-full'>
          <Profil/>
        </div>
      </div>
  )
}

export default App
