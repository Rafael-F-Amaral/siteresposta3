import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Respostas from './pages/Respostas'
import Download from './pages/Download'
import Atualizacao from './pages/Atualizacao'
import Bug from './pages/ReportBug'
import Pix from './pages/Pix';



const App = () => {
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Respostas' element={<Respostas />} />
          <Route path='/Download' element={<Download />} />
          <Route path='/Atualizacao' element={<Atualizacao />} />
          <Route path='/reportBug' element={<Bug />} />
          <Route path='/Pix' element={<Pix />} />
        </Routes>

      </Router>

    </>
  )
}

export default App

