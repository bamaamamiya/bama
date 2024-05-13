import Profil from './components/Profil/Profile'
import Navbar from './components/Navbar'
import Status from './components/Status/Status'
// import './App.css'

function App() {
  return(
    <div className='h-full bg-black text-white'>
    <Navbar/>
        <div className='h-screen space-y-2'>
          <Profil/>
          <Status/>
        </div>
      </div>
  )
}

export default App
