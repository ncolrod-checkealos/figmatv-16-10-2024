import React from 'react';

const Pantalla = ({ imagen }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default Pantalla;
