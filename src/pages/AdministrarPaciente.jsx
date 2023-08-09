import { useState } from "react"
import Formulario from "../components/Formulario"
import ListadoPaciente from "../components/Listadopaciente"

const AdministrarPaciente = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <button
          type="button"
          className="bg-indigo-600 text-white font-bold uppercase p-3 mx-10 rounded-md mb-10 md:hidden"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >{mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
      <div className={`${mostrarFormulario ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
        <Formulario />
      </div>

      <div className="md:w-1/2 lg:w-3/5">
        <ListadoPaciente />
      </div>
    </div>
  )
}

export default AdministrarPaciente