import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import NuevoPassword from "./pages/NuevoPassword";

import { AuthProvider } from "./context/AuthProvider";
import AdministrarPaciente from "./pages/AdministrarPaciente";
import { PacientesProvider } from "./context/PacienteProvider";

const App = () => {

  return (
    <BrowserRouter>
        {/* context */}
        <AuthProvider>
          {/* context */}
          <PacientesProvider>
          <Routes>
          {/* layout */}
          <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />

          </Route>

          <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarPaciente />} />
          </Route>
        </Routes>
          </PacientesProvider>          
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
