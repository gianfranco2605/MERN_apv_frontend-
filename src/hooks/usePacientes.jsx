import { useContext } from "react";
import PacientesContext from "../context/PacienteProvider";


// custom hook
const usePacientes = () => {
    return useContext(PacientesContext);
};


export default usePacientes;