import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
            <NavBar/>
        </header>
        <main>
            <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/destination' element={<Destination/>} />
              <Route path='/crew' element={<Crew/>} />
              <Route path='/technology' element={<Technology/>} />
              <Route path='/*' element={<NotFound/>} />
            </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;