import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components-permanent/Nav'
import { Articles } from './components-pages/Articles'
import { Article } from './components-pages/Article'
import { Login } from './components-pages/Login'
import { Toaster } from 'react-hot-toast';
import { Error } from './components-pages/Error'

function App() {

  return <div> 
  <Toaster />
  <Nav/> 
  <Routes>
  <Route path="/" element={<Articles />} />
    <Route path="/articles" element={<Articles />} />
    <Route path='/articles/:id' element={<Article />} />
    <Route path='/login' element={<Login />} />
    <Route path="*" element={<Error
    errorStatus={404}
    errorMessage={"not found: page does not exist"} />} />
  </Routes>
  </div>
}

export default App
