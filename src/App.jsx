import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'

function App() {
  const [citas, setCitas] = useState([])

  return (
    <>
      <Titulo />

      <div className="contenedor">
        <div>
          <h2>CREAR MI CITA</h2>
          <Formulario citas={citas} setCitas={setCitas} />
        </div>

        <div>
          <h2>ADMINISTRA TUS CITAS</h2>
          <Listado citas={citas} setCitas={setCitas} />
        </div>
      </div>
    </>
  )
}

export default App