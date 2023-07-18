import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components-permanent/Nav'
import { Articles } from './components-pages/Articles'
import { Article } from './components-pages/Article'
import { Cooking } from './components-pages/Cooking'
import { Football } from './components-pages/Football'
import { Coding } from './components-pages/Coding'



function App() {
  return <div> 
  <Nav/> 
  <Routes>
    <Route path="/articles" element={<Articles />} />
    <Route path='/articles/:id' element={<Article />} />
    <Route path='/articles/cooking' element={<Cooking />} />
    <Route path='/articles/football' element={<Football />}/>
    <Route path='/articles/coding' element={<Coding />}/>
  </Routes>
  </div>
}

export default App
