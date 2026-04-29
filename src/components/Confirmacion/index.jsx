const Confirmacion = ({ onConfirmar, onCancelar }) => {
  return (
    <div className="modal">
      <div className="modal-contenido">
        <p>¿Seguro que querés eliminar esta cita?</p>
        <button onClick={onConfirmar}>Sí, eliminar</button>
        <button onClick={onCancelar}>Cancelar</button>
      </div>
    </div>
  )
}

export default Confirmacion