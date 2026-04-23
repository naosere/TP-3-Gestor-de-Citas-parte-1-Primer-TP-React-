import Cita from "../Cita";

const Listado = ({citas, setCitas}) => {
    return(
        <div>
            <div>                
            {citas.map((cita) => (
                <Cita
                    mascota={cita.mascota}
                    duenio={cita.duenio}
                    fecha={cita.fecha}
                    hora={cita.hora}
                    sintomas={cita.sintomas}
                />
            ))}
            </div>
        </div>
    )
}

export default Listado;