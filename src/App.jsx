import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Home from './pages/Home/Home'
import Layout from './components/Layout'
import AllProjects from './pages/projets/AllProjects'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/allProjects' element={<AllProjects/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
