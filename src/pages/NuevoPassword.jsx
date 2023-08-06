import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const NuevoPassword = () => {
  const [nuevaPassword, setNuevaPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(()=> {
    const  comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`)
        setAlerta({
          msg: 'Coloca tu nuevo Password',
          error: false
        })
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: 'Hubo un error con el enlace',
          error: true
        })
      }
    }
    comprobarToken();
  }, [])

  const { msg } = alerta

  const handlePassword = (e) => {
    setNuevaPassword(e.target.value);
  }

 

  return (
    <>
      <div>
          <h1 className="text-indigo-600 font-black text-6xl">Reestablece tu Password y no Pierdas Acceso a {""}<span className="text-black">tus Pacientes</span></h1>
      </div>
      <div className="mt-10 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
      {msg && <Alerta alerta={alerta} />}
        
        {tokenValido && (
        <form>
        
            <div className='my-5'>
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Nuevo Password
              </label>
              <input
                  type="password"
                  placeholder="Tu Nuevo password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={nuevaPassword}
                  onChange={ handlePassword }
              />
            </div>  
              <input type="submit" value="guardar nuevo password" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" 
              />
        </form>
        )}
      </div>
    </>  
  )
}

export default NuevoPassword;