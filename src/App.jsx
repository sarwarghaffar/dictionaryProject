
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dummy from './components/Dummy'
import Logo from './components/Logo'


function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === dark) {
      setMode(light)
    }
    else {
      setMode(dark)
    }
  }

  return (
    <>
    <BrowserRouter>
        <Navbar title="Info" about="About" mode={mode} togglemode={toggleMode}/>
        

        <Routes>
          
          <Route path='/EnterData' element={<TextForm heading="Enter the Text to analyze" />}/>
          <Route path="/" element={<Dummy/>}/>
          <Route path='/info' element={<Logo/>}/>

        </Routes>

        <Alert alert="my name is M.Sarwar" />

        </BrowserRouter>
    </>

  )
}

export default App
