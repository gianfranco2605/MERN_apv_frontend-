import { useState } from 'react';
import Alerta from './Alerta';
import usePacientes from '../hooks/usePacientes';

const Formulario = () => {

//   States
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState(Date.now());
  const [sintomas, setSintomas] = useState('');

  const [alerta, setAlerta] = useState({});

  const { } = usePacientes();

//   onClick Functions
const handleNombre = (e) => {
    setNombre(e.target.value)
}

const handlePropietario = (e) => {
    setPropietario(e.target.value)
}

const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handleFecha = (e) => {
    setFecha(e.target.value)
}

const handleSintomas = (e) => {
    setSintomas(e.target.value)
}

// Form submit
const handleSubmit = (e) => {
    e.preventDefault();

    //Validate Form
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
        setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true,
        })
    }
}
  const { msg } = alerta
  return (
    <>
        <p className='text-lg text-center mb-10'>
            Añade tus pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form
            onSubmit={handleSubmit}
            className='bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md'
        >
            <div className='mb-5'>
                <label 
                    htmlFor='nombre'
                    className='text-gray-700 uppercase font-bold'
                    >
                    Nombre Mascota</label>
                <input 
                    id='nombre'
                    type='text'
                    placeholder='Nombre de la Mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={nombre}
                    onChange={handleNombre}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='propietario'
                    className='text-gray-700 uppercase font-bold'
                    >
                    Nombre Propietario</label>
                <input 
                    id='propietario'
                    type='text'
                    placeholder='Nombre del Propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={propietario}
                    onChange={handlePropietario}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='email'
                    className='text-gray-700 uppercase font-bold'
                    >
                    Email</label>
                <input 
                    id='email'
                    type='text'
                    placeholder='Email del Propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='fecha'
                    className='text-gray-700 uppercase font-bold'
                    >
                    Fecha de Alta</label>
                <input 
                    id='fecha'
                    type='date'
                    placeholder='Fecha de Alta'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={handleFecha}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='sintomas'
                    className='text-gray-700 uppercase font-bold'
                    >
                    Síntomas</label>
                <input 
                    id='sintomas'
                    type='text-area'
                    placeholder='Describe los Síntomas'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={sintomas}
                    onChange={handleSintomas}
                />
            </div>

            <input 
                type='submit'
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md'
                value='Agregar Paciente'
            />

        </form>

        {msg && <Alerta alerta={alerta} />}
    </>
  )
}

export default Formulario