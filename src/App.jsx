
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
   <Header/>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/WatchHistory' element={<WatchHistory/>}/>
  </Routes>

   <Footer/>
    </>
  )
}

export default App
