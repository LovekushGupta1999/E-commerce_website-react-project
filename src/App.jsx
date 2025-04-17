import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header/Header'
import {BrowserRouter, Routes , Route } from "react-router"
import Home from './pages/Home/Home'
import About from './pages/About/About'
function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
    <Routes>
      <Route exact={true} path='/' element={<Home/>}/>
      <Route exact={true} path='/about' element={<About/>}/>
    </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
