import Cita from "../Cita";
import './Listado.css'
const Listado = ({citas, setCitas}) => {
    return(
        <div className="listado">
            <div>                
            {citas?.map((cita) => (
                <Cita
                mascota={cita.mascota}
                duenio={cita.duenio}
                fecha={cita.fecha}
                hora={cita.hora}
                sintomas={cita.sintomas}
                eliminar={() => setCitas(citas.filter(c => c !== cita))}
                />
            ))}
            </div>
        </div>
    )
}

export default Listado;