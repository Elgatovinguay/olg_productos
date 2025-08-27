// Productos de ejemplo (puedes cambiar o agregar más)
let productos = [
  { id: 1, nombre: "Camiseta", precio: 15, cantidad: 10, imagen: "img/camiseta.jpg" },
  { id: 2, nombre: "Pantalón", precio: 25, cantidad: 5, imagen: "img/pantalon.jpg" },
  { id: 3, nombre: "Zapatos", precio: 40, cantidad: 7, imagen: "img/zapatos.jpg" }
];

let carrito = [];

// Mostrar productos en pantalla
function mostrarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = "";

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <p>Stock: ${producto.cantidad}</p>
      <button onclick="agregarCarrito(${producto.id})">Agregar al carrito</button>
    `;
    lista.appendChild(div);
  });
}

// Agregar productos al carrito
function agregarCarrito(id) {
  const producto = productos.find(p => p.id === id);

  if (producto && producto.cantidad > 0) {
    carrito.push(producto);
    producto.cantidad--;
    actualizarCarrito();
    mostrarProductos();
  } else {
    alert("Producto agotado");
  }
}

// Actualizar carrito en pantalla
function actualizarCarrito() {
  const items = document.getElementById("items-carrito");
  const totalSpan = document.getElementById("total");
  items.innerHTML = "";

  let total = 0;
  carrito.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `${p.nombre} - $${p.precio}`;
    items.appendChild(div);
    total += p.precio;
  });

  totalSpan.textContent = total;
}

mostrarProductos();