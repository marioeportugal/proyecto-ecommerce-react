// Menu.js
import React from 'react';

const Menu = ({ cambiarCategoria, categoriaSeleccionada }) => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <button onClick={() => cambiarCategoria("todos")} className={`boton-menu boton-categoria ${categoriaSeleccionada === "todos" ? 'active' : ''}`}>
            Todos los productos
          </button>
        </li>
        {/* Agrega aquí otros botones de categorías con cambios similares */}
      </ul>
    </nav>
  );
};

export default Menu;
