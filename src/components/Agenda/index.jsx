import Cita from "../Cita";
import Subtitulo from "../Subtitulo";
const Agenda = ({texto}) => {

    const citas = [
    {
        mascota: "Nina",
        duenio: "Martin",
        fecha: "2021-08-05",
        hora: "08:20",
        sintomas: "Le duele la pierna"
    },
    {
        mascota: "Sifon",
        duenio: "Flecha",
        fecha: "2023-08-05",
        hora: "09:24",
        sintomas: "Duerme mucho"
    },
    {
        mascota: "Floki",
        duenio: "Ari",
        fecha: "2023-08-05",
        hora: "16:15",
        sintomas: "No está comiendo"
    }
]
    return(
        <div>

            <Subtitulo texto = {texto}> </Subtitulo>
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

export default Agenda;