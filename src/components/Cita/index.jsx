import { useState } from "react"
import Confirmacion from "../Confirmacion"
import './Cita.css'

const Cita = ({ mascota, duenio, fecha, hora, sintomas, eliminar }) => {

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)

  return (
    <div className="cita">
      <p><span>Mascota:</span> {mascota}</p>
      <p><span>Dueño:</span> {duenio}</p>
      <p><span>Fecha:</span> {fecha}</p>
      <p><span>Hora:</span> {hora}</p>
      <p><span>Síntomas:</span> {sintomas}</p>

      <button onClick={() => setMostrarConfirmacion(true)}>
        ELIMINAR ×
      </button>

      {mostrarConfirmacion && (
        <Confirmacion
          onConfirmar={() => {
            eliminar()
            setMostrarConfirmacion(false)
          }}
          onCancelar={() => setMostrarConfirmacion(false)}
        />
      )}
    </div>
  )
}

export default Cita