import './Cita.css'

const Cita = ({mascota, duenio, fecha, hora, sintomas, eliminar}) => {
            return(
            <div className="cita">
              <p><span>Mascota:</span> {mascota}</p>
              <p><span>Dueño:</span> {duenio}</p>
              <p><span>Fecha:</span> {fecha}</p>
              <p><span>Hora:</span> {hora}</p>
              <p><span>Síntomas:</span> {sintomas}</p>
              <button onClick={eliminar}><p>ELIMINAR ×</p></button>
            </div>  
            )
}

export default Cita; 