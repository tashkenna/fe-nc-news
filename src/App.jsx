import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components-permanent/Nav'
import { Articles } from './components-pages/Articles'
import { Article } from './components-pages/Article'
import { Login } from './components-pages/Login'

function App() {

  return <div> 
  <Nav/> 
  <Routes>
    <Route path="/articles" element={<Articles />} />
    <Route path='/articles/:id' element={<Article />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  </div>
}

export default App
