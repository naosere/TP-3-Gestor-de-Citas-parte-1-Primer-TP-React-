import './Formulario.css'
const Formulario = ({citas, setCitas}) =>{
    const agregarCita = (e) =>{
        e.preventDefault();
        
        const formulario = e.target;
    
        const nuevaCita = {
            mascota: formulario.mascota.value,
            duenio: formulario.propietario.value,
            fecha: formulario.fecha.value,
            hora: formulario.hora.value,
            sintomas : formulario.sintomas.value
        }
        setCitas([
            ...citas,
            nuevaCita
        ]);
        formulario.mascota.value = "";
        formulario.propietario.value = "";
        formulario.fecha.value = "";
        formulario.hora.value = "";
        formulario.sintomas.value = "";
    }
    return (
        <div>
        
            <form onSubmit={agregarCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />     

                <label>Nombre Dueño</label>
                <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"/>
                
                <label>Fecha</label>     
                <input type="date" name="fecha" class="u-full-width" />
                
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width"  />

                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>     

                <button type="submit" class="u-full-width button-primary">Agregar Cita</button>         
            </form>
        </div>
    )
}

export default Formulario;