import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // another way for children
    // const { children } = props;
    // state
    const [cargando, setCargando] = useState(true);
    const [ auth , setAuth ] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                setCargando(false);
                return;
            }
            
            const config = {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await clienteAxios('/veterinarios/perfil', config)
                setAuth(data)
            } catch (error) { 
                console.log(error.response.data.msg);
                setAuth({})
            }
            setCargando(false);
        };
        autenticarUsuario();
    }, [])
    // close sesion function
    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({})
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth, 
                cargando,
                cerrarSesion
            }}
        >
            {/* children are all the components */}
            { children }
        </AuthContext.Provider>
    )
};

export {
    AuthProvider
};

export default AuthContext;