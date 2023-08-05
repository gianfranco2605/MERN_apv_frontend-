import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";


const Registrar = () => {
    // states
    const [ nombre, setNombre ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repetirPassword, setRepetirPassword ] = useState("");
    const [alerta, setAlerta] = useState({})

    // functions onChange
    const handleNombre = (e) => {
      setNombre(e.target.value);
    }

    const handleEmail = (e) => {
      setEmail(e.target.value);
    }

    const handlePassword = (e) => {
      setPassword(e.target.value);
    }

    const handleRepetirPassword = (e) => {
      setRepetirPassword(e.target.value)
    }

    // form submit function 
    const handleSubmit = async (e) => {

      e.preventDefault();
      // validate form
      // Empty inputs validation
      if([nombre, email, password, repetirPassword].includes('')) {
          setAlerta({ msg: "Hay campos vacios", error: true })
          return;
      }
      // Same password Validation
      if(password !== repetirPassword) {
        setAlerta({ msg: "Los Passwords no son iguales", error: true })
        return;
      }
      // min lenght password validation
      if(password.length < 6) {
        setAlerta({ msg: "Password muy corto, minimo 6 caracteres", error: true })
        return
      }

      setAlerta({})

      //Create user in API
      try {
        
        await clienteAxios.post('/veterinarios', { nombre, email, password })
        setAlerta({
          msg: 'Usuario Creado correctamente, revisa tu email',
          error: false,
        })
        
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
      
    }

    const { msg } = alerta;

    return (
      <>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra  {""}<span className="text-black">tus Pacientes</span></h1>
        </div>
        <div className="mt-10 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
          {/* alerta component */}
          {msg && <Alerta alerta={alerta} />}

          <form 
            onSubmit={handleSubmit}
          >
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre
                </label>
                <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={nombre}
                    onChange={handleNombre}
                />
              </div>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Email
                </label>
                <input
                    type="email"
                    placeholder="Email de Registro"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={email}
                    onChange={ handleEmail}
                />
              </div>
              <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Password
              </label>
              <input
                  type="password"
                  placeholder="Tu password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={ handlePassword }
              />
            </div>
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Repetir Password
              </label>
              <input
                  type="password"
                  placeholder="Repite tu password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={repetirPassword}
                  onChange={handleRepetirPassword}
              />
            </div>
              {/* button */}
              <input type="submit" value="crear cuenta" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />

              <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-500" to="/">Ya tienes una cuenta? Inicia Sesión</Link>
                <Link className="block text-center my-5 text-gray-500" to="/olvide-password">Olvide mi Password</Link>
            </nav>
          </form>
        </div>  
      </>
    )
  }
  
  export default Registrar;