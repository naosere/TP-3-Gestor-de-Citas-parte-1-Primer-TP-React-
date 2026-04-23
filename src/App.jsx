import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Listado from './components/Listado'

import Titulo from './components/Titulo'
import Formulario from './components/Formulario'

function App() {

  const usestateincio = [""]
  const [citas, setCitas] = useState(usestateincio)
  const subtitulo1 = "Crear una cita"
  const subtitulo2 = "Administra tus citas"
  return (
    <>
    <Titulo></Titulo>

    <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario citas={citas} setCitas={setCitas} ></Formulario>
          </div>
          <div class="one-half column">
            <Listado citas={citas} setCitas={setCitas} > </Listado>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default App
