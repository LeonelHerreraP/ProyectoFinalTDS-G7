import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Inicio from './pages/Inicio.jsx';
import Reservaciones from './pages/Reservaciones.jsx';
import ReservasEnCurso from './pages/ReservasEnCurso.jsx';
import Habitaciones from './pages/Habitaciones.jsx';
import Inventario from './pages/Inventario.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/inicio' element={<Inicio />}></Route>
      <Route path='/reservaciones' element={<Reservaciones />}></Route>
      <Route path='/reservaciones-en-curso' element={<ReservasEnCurso />}></Route>
      <Route path='/habitaciones' element={<Habitaciones />}></Route>
      <Route path='/inventario' element={<Inventario />}></Route>
      <Route path="*" element={<Inicio />} />
    </Routes>
  );
}

export default App;
