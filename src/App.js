import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pantalla from './Pantalla';

// Importar las imágenes
import pantallaInicial from './assets/pantallaInicial.png';
import encanto from './assets/encanto.png';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PantallaInicial />} />
        <Route path="/encanto" element={<Pantalla imagen={encanto} />} />
      </Routes>
    </Router>
  );
};

// Componente para la pantalla inicial
const PantallaInicial = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${pantallaInicial})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative', // Posiciona el contenedor
      }}
    >
      {/* Área clicable */}
      <div
        onClick={() => window.location.href = '/encanto'} // Redirigir al hacer clic
        style={{
          position: 'absolute',
          top: '20%',  // Ajusta esto para mover el recuadro
          left: '9%', // Ajusta esto para mover el recuadro
          width: '40%', // Ancho del recuadro
          height: '50%', // Alto del recuadro
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Color del recuadro (opcional)
          cursor: 'pointer', // Cambia el cursor al pasar por encima
          zIndex: 1, // Asegúrate de que esté por encima de la imagen
        }}
      >
        {/* Puedes agregar texto aquí si lo deseas */}
      </div>
    </div>
  );
};

export default App;
