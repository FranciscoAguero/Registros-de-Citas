import  {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'




function App() {

//citas en localstorage
let citasIniciales = JSON.parse(localStorage.getItem('citas'));
if(!citasIniciales) {
  citasIniciales = []
}


//arreglos de citas
  const [citas, guardarCitas] = useState(citasIniciales);

//
useEffect( () => {
let citasIniciales = JSON.parse(localStorage.getItem('citas'));
if(citasIniciales){
  localStorage.setItem('citas', JSON.stringify(citas));
} else {
  localStorage.setItem('citas', JSON.stringify([]));
}

}, [citas])


 //funcion que tomara todas las cita actuales y creara una nuevas

  const crearCitas = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
 }

const eliminarCitas = id => {
  const nuevasCitas = citas.filter(cita => cita.id !== id)
  guardarCitas(nuevasCitas)
}

const titulo = citas.length === 0 ? 'no hay citas' : 'Administra tus citas'
  return (
    
    <Fragment>  
    
      <h1 className="TituloPrincipal">Administradores de Pacientes</h1>
      <div className='container'>
        <div className='row align-items-start'>
            <div className='col'>
                <Formulario crearCitas={crearCitas} />
            </div>
            <div className='col'>
                <h2>{titulo}</h2>
                {citas.map(cita => (
                 
                  <Cita 
                  key={cita.id}
                  cita={cita} 
                  eliminarCitas={eliminarCitas}
                  />
                ))}
            </div>
        </div>
    
    </div>
  
    </Fragment>
    

  );
}

export default App;
