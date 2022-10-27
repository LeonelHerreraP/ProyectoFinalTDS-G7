import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Inicio from './pages/Inicio.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/inicio' element={<Inicio />}></Route>
      <Route path="*" element={<Inicio />} />
    </Routes>
  );
}

export default App;
