import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import App from './app';

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  useEffect(() => {
    // lógica para cargar productos desde el archivo JSON
    fetch("C:/Users/mario/OneDrive/Documentos/Proyecto Mario Portugaljs/productos.json")
      .then(response => response.json())
      .then(data => {
        console.log("Productos recibidos:", data);
        setProductos(data);
        cargarProductos(data);
      });
  }, []);

  const cargarProductos = (productosElegidos) => {
    console.log("Recibiendo datos de productos:", productosElegidos);
    actualizarBotonesAgregar();
  };

  const actualizarBotonesAgregar = () => {
    // Lógica para actualizar botones de agregar al carrito
    // ...
  };

  const agregarAlCarrito = (id) => {
    // Lógica para agregar un producto al carrito
    // ...

    // Actualizar el estado de productosEnCarrito
    setProductosEnCarrito(nuevosProductosEnCarrito);

    // Actualizar el numerito
    actualizarNumerito();
  };

  const actualizarNumerito = () => {
    // Lógica para actualizar el numerito en el carrito
    // ...
  };

  const cambiarCategoria = (id) => {
    // Cambiar la categoría seleccionada
    setCategoriaSeleccionada(id);

    // Lógica para cargar productos según la nueva categoría
    if (id !== "todos") {
      const productosCategoria = productos.filter(producto => producto.categoria.id === id);
      cargarProductos(productosCategoria);
    } else {
      cargarProductos(productos);
    }
  };

  return (
    <div>
      <Menu cambiarCategoria={cambiarCategoria} categoriaSeleccionada={categoriaSeleccionada} />
      {/* Pasa los productos como propiedad a App */}
      <App productos={productos} />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
