class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class Pila {
  constructor() {
    this.cima = null;
    this.tamaño = 0;
  }

  push(valor) {
    const nuevoNodo = new Nodo(valor);
    nuevoNodo.siguiente = this.cima;
    this.cima = nuevoNodo;
    this.tamaño++;
  }

  pop() {
    if (this.estaVacia()) return null;
    const valor = this.cima.valor;
    this.cima = this.cima.siguiente;
    this.tamaño--;
    return valor;
  }

  peek() {
    return this.estaVacia() ? null : this.cima.valor;
  }

  estaVacia() {
    return this.cima === null;
  }

  toArray() {
    let actual = this.cima;
    const array = [];
    while (actual) {
      array.push(actual.valor);
      actual = actual.siguiente;
    }
    return array;
  }
}

const torreA = new Pila();
const torreB = new Pila();
const torreC = new Pila();

const torres = { A: torreA, B: torreB, C: torreC };

function renderizarTorres() {
  ['A', 'B', 'C'].forEach(id => {
    const contenedor = document.getElementById(id);
    contenedor.innerHTML = '';
    torres[id].toArray().forEach(disco => {
      const div = document.createElement('div');
      div.className = 'disco';
      div.textContent = disco;
      div.style.width = `${disco * 25}px`;
      contenedor.appendChild(div);
    });
  });
  actualizarSeleccionVisual();
}

function moverDisco(origen, destino) {
  if (origen.estaVacia()) return false;
  const disco = origen.peek();
  if (destino.estaVacia() || destino.peek() > disco) {
    destino.push(origen.pop());
    return true;
  }
  return false;
}

let seleccion = {
  origen: null,
  destino: null
};

function actualizarSeleccionVisual() {
  // Remover todas las selecciones visuales
  ['A', 'B', 'C'].forEach(id => {
    document.getElementById(id).classList.remove('seleccionado');
  });

  // Añadir selección visual al origen
  if (seleccion.origen) {
    document.getElementById(seleccion.origen).classList.add('seleccionado');
  }

  // Añadir selección visual al destino
  if (seleccion.destino) {
    document.getElementById(seleccion.destino).classList.add('seleccionado');
  }
}

function seleccionarTorre(id) {
  if (!seleccion.origen) {
    // Seleccionar origen
    seleccion.origen = id;
    document.getElementById('origen-seleccionado').textContent = id;
    document.getElementById('cambiar-origen').style.display = 'block';
  } else if (!seleccion.destino) {
    // Seleccionar destino (puede ser cualquier torre, incluso la misma)
    seleccion.destino = id;
    document.getElementById('destino-seleccionado').textContent = id;
    document.getElementById('cambiar-destino').style.display = 'block';
  } else {
    // Si ambos están seleccionados, cambiar el destino
    seleccion.destino = id;
    document.getElementById('destino-seleccionado').textContent = id;
  }
  actualizarSeleccionVisual();
}

function cambiarOrigen() {
  seleccion.origen = null;
  document.getElementById('origen-seleccionado').textContent = '-';
  document.getElementById('cambiar-origen').style.display = 'none';
  actualizarSeleccionVisual();
}

function cambiarDestino() {
  seleccion.destino = null;
  document.getElementById('destino-seleccionado').textContent = '-';
  document.getElementById('cambiar-destino').style.display = 'none';
  actualizarSeleccionVisual();
}

function realizarMovimiento() {
  const origenId = seleccion.origen;
  const destinoId = seleccion.destino;

  if (!origenId || !destinoId) {
    const mensajeSeleccionIncompleta = `<strong>ERROR:</strong> Debes seleccionar una torre de <strong>origen</strong> y una de <strong>destino</strong> antes de mover un disco.
        `;
    alertaGaming(' Movimiento no válido', mensajeSeleccionIncompleta, 'error');
    return;
  }

  if (origenId === destinoId) {
    const mensajeMismaTorre = `<strong>ERROR:</strong> El <strong>origen</strong> y <strong>destino</strong> no pueden ser la misma torre.
      `;
    alertaGaming(' Movimiento no válido', mensajeMismaTorre, 'error');
    return;
  }

  const exito = moverDisco(torres[origenId], torres[destinoId]);
  if (!exito) {
    const mensajeMovimientoInvalido = `<strong>Movimiento inválido:</strong> No puedes poner un disco grande sobre uno pequeño.
      `;
    alertaGaming(' Movimiento inválido', mensajeMovimientoInvalido, 'error');
  }

  renderizarTorres();
  verificarVictoria();

  // Reiniciar selección
  seleccion.origen = null;
  seleccion.destino = null;
  document.getElementById('origen-seleccionado').textContent = '-';
  document.getElementById('destino-seleccionado').textContent = '-';
  document.getElementById('cambiar-origen').style.display = 'none';
  document.getElementById('cambiar-destino').style.display = 'none';
}

function verificarVictoria() {
  const totalDiscos = 5;
  const torresDestino = [torreB, torreC];

  for (let torre of torresDestino) {
    if (torre.tamaño === totalDiscos) {
      const discos = torre.toArray();
      const ordenCorrecto = [...discos].sort((a, b) => a - b);
      const esVictoria = discos.every((valor, index) => valor === ordenCorrecto[index]);
      if (esVictoria) {
        setTimeout(() => {
          const mensajeVictoria = ` <strong>¡Felicidades!</strong> Completaste las <strong>Torres de Hanoi</strong> 🎉
              `;
          alertaGaming(' ¡Victoria!', mensajeVictoria, 'win');
        }, 100);
      }
    }
  }
}

function mostrarInstrucciones() {
  const mensajeHanoi = `
      <strong>OBJETIVO:</strong> Mover todos los discos de la Pila A a la Pila B o C<br><br>
      <strong>CONDICIÓN PARA GANAR:</strong>
      <ul style="padding-left: 20px; margin: 5px 0;">
        <li>Todos los 5 discos deben estar en la en la Pila C</li>
        <li>Los discos deben estar ordenados correctamente (el más grande abajo, el más pequeño arriba)</li>
      </ul>
      <strong>REGLAS:</strong>
      <ul style="padding-left: 20px; margin: 5px 0;">
        <li>Solo puedes mover un disco a la vez</li>
        <li>Solo puedes mover el disco que está en la parte superior de una pila</li>
        <li>Un disco grande NUNCA puede ir encima de uno más pequeño</li>
      </ul>
      `;
  // Mostrar la alerta
  alertaGaming('🎮 TORRES DE HANOI 🎮', mensajeHanoi, 'info');
}
function reiniciarJuego() {
  // Limpiar todas las torres
  torreA.cima = torreB.cima = torreC.cima = null;
  torreA.tamaño = torreB.tamaño = torreC.tamaño = 0;

  // Discos disponibles (de mayor a menor en torreA) - ahora con 5 discos
  const discos = [5, 4, 3, 2, 1];

  // Colocar todos los discos en torreA
  discos.forEach(disco => {
    torreA.push(disco);
  });

  renderizarTorres();

  // Reiniciar selección
  seleccion.origen = null;
  seleccion.destino = null;
  document.getElementById('origen-seleccionado').textContent = '-';
  document.getElementById('destino-seleccionado').textContent = '-';
  document.getElementById('cambiar-origen').style.display = 'none';
  document.getElementById('cambiar-destino').style.display = 'none';
}

function alertaGaming(titulo, mensaje = '', tipo = 'info') {
  const colores = {
    info: '#00f2ff',
    error: '#ff3838',
    win: '#32ff7e'
  };

  Swal.fire({
    title: `<h2 style="
      color: ${colores[tipo]};
      font-style: italic;
      font-size: 20px;
      margin-bottom: 15px;
      text-align: center;
    ">${titulo}</h2>`,

    html: `<div style="
      font-size: 14px;
      line-height: 1.6;
      color: #fff;
      text-align: center;
      font-family: Arial, sans-serif;
      padding: 5px 15px;
      ">${mensaje}</div>`,

    background: '#000',
    color: '#fff',
    width: '70%',
    backdrop: 'rgba(34, 33, 33, 0.85)',
    showClass: {
      popup: 'animate__animated animate__fadeInDownBig'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    confirmButtonColor: colores[tipo],
    confirmButtonText: 'OK',
    customClass: {
      popup: 'alerta-gamer'
    }
  });
}

// Iniciar juego al cargar
window.onload = function () {
  reiniciarJuego();
  setTimeout(mostrarInstrucciones, 500);
};
