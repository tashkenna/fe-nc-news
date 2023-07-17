import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components-permanent/Nav'
import { Articles } from './components-pages/Articles'

function App() {
  return <div> 
  <Nav/> 
  <Routes>
    <Route path="/articles" element={<Articles />} />
  </Routes>
  </div>
}

export default App
