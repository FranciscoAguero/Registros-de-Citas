import React from 'react'

function Cita({cita, eliminarCitas}) {
  return (
    <div className='form-control mt-2 citas'>
      <p className=''>Mascota: <span>{cita.mascota} </span></p>
      <p className=''>Duenos: <span>{cita.propietario} </span></p>
      <p className=''>fecha: <span>{cita.fecha} </span></p>
      <p className=''>hora: <span>{cita.hora} </span></p>
      <p className=''>sintomas: <span>{cita.sintomas} </span></p>
      <button className='btn btn-danger form-control' onClick={ () => eliminarCitas(cita.id)}>Eliminar &times;</button>
    </div>
  )
}

export default Cita 