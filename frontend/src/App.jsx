import './css/App.css'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router'
import { MovieProvider } from './contexts/MovieContexts'

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}
export default App
