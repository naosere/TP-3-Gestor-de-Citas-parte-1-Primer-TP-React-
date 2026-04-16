import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Agenda from './components/Agenda'

import Titulo from './components/Titulo'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)
  const subtitulo1 = "Crear una cita"
  const subtitulo2 = "Administra tus citas"
  return (
    <>
    <Titulo></Titulo>

    <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario texto = {subtitulo1}></Formulario>
          </div>
          <div class="one-half column">
                <Agenda texto={subtitulo2}> </Agenda>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default App
