import React from 'react';

function App({ productos }) {
  console.log("Productos recibidos en App:", productos);

  return (
    <div>
      <h1>Hola desde React!</h1>
      {/* Mapear productos y mostrar cada uno */}
      {productos.map(producto => (
        <div key={producto.id}>
          <h2>{producto.titulo}</h2>
          <img src={producto.imagen} alt={producto.titulo} />
          <p>Categoría: {producto.categoria.nombre}</p>
          <p>Precio: {producto.precio}</p>
          {/* Puedes agregar más detalles según tus necesidades */}
        </div>
      ))}
    </div>
  );
}

export default App;
