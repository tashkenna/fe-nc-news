import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components-permanent/Nav'
import { Articles } from './components-pages/Articles'
import { Article } from './components-pages/Article'
// import { Cooking } from './components-pages/Cooking'
// import { Football } from './components-pages/Football'
// import { Coding } from './components-pages/Coding'
import { Topics } from './components-pages/Topics'
import { Filter } from './components/Filter'



function App() {
  return <div> 
  <Nav/> 
  <Routes>
 
    <Route path="/articles" element={<Articles />} />

    {/* <Route path='/articles/:topic/:filter' element={<Filter />} /> */}

    <Route path='/articles/:topic' element={<Topics />} />
    
    <Route path='/articles/:id' element={<Article />} />
    
    
    {/* <Route path="*" element={<Error
    />} />  */}


  </Routes>
  </div>
}

export default App
