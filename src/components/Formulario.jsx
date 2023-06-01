import {Fragment, useState} from 'react'
import uuid from 'react-uuid'

function Formulario({crearCitas}) {

  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })
  const [error, actualizarError] = useState(false)
  //funcion para obtener los datos del formulario
  const ActualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: [e.target.value]
    })
  }
  const {mascota,propietario, fecha, hora, sintomas} = cita
//cuando el usuario envia el formulario

const submitCitas = e => {
  e.preventDefault()

  if(mascota === '' || propietario === '' || fecha ==='' || hora === '' || sintomas === '' ) {
    actualizarError(true)
    return;
  } 
  actualizarError(false)

  cita.id = uuid()
 crearCitas(cita)

 actualizarCita({
  mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
 })
}

  return (
    <Fragment>
      <h2 className='' >Crear Cita</h2>
      {error ? <p className='alert alert-danger form-control' >todos los campos son obligatorios</p> : null}

      <form   onSubmit={submitCitas}>
        <label>Nombre Mascota</label>
          <input className='form-control' 
          name='mascota'
          type='text'
          placeholder='Nombre  Mascota'
          onChange={ActualizarState}
          value={mascota}
        />
          <label>Nombre Dueño</label>
             <input className='form-control' 
          name='propietario'
          type='text'
          placeholder='Nombre Dueño Mascota'
          onChange={ActualizarState}
          value={propietario}
        />
         <label>Fecha</label>
            <input className='form-control' 
          name='fecha'
          type='date'
          onChange={ActualizarState}
          value={fecha}
        
        />
          <label>Hora</label>
             <input className='form-control' 
          name='hora'
          type='time'
          onChange={ActualizarState}
          value={hora}
        />
          <label>Sintoma Paciente</label>
              <textarea 
              className='form-control'
              name='sintomas'
              onChange={ActualizarState}
              value={sintomas}
              >
              
              </textarea>
          <button  type="submit" className=' form-control btn btn-primary mt-2 '> AGREGAR CITAS</button>
      </form>
    </Fragment>
  )
}

export default Formulario