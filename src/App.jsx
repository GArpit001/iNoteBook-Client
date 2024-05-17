import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from "./component/About"
import Service from './component/Service'
import Alerta from './component/Alerta'
import NoteState from './context/NoteState.jsx'
import SignUp from './component/SignUp.jsx'
import Login from './component/Login.jsx'
import Footer from './component/Footer.jsx'

function App() {



  // const demoNote = []



  const [alert, setAlert] = useState(null)


  const showAlert = (msg) => {
    setAlert({
      message: msg
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }


  return (
    <>
      <NoteState>


        <BrowserRouter>

          <Navbar />

          <Alerta alert={alert} />

          <div className="pt-5  ">


            <Routes>

              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home showAlert={showAlert} />} />
              {/* <Route path="/" element={<Home showAlert={showAlert} />} /> */}
              <Route path="/service" element={<Service />} />


              <Route path='/login' element={<Login showAlert={showAlert} />} />
              <Route path='/signup' element={<SignUp showAlert={showAlert} />} />


            </Routes>
          </div>

          {/* <Footer/> */}


        </BrowserRouter>
      </NoteState>


    </>
  )
}

export default App
