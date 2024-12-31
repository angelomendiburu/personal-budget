// Array para almacenar las transacciones
const transacciones = [];

// Variables para el balance
let balanceTotal = 0;

// Referencias a los elementos del DOM
const formulario = document.getElementById('formTransaccion');
const listaTransacciones = document.getElementById('listaTransacciones');
const balance = document.getElementById('balance');

// Función para validar el monto
function validarMonto(monto) {
    return typeof monto === 'number' && monto > 0;
}

// Función para registrar una transacción
function registrarTransaccion(tipo, monto) {
    // Validar el monto
    if (!validarMonto(monto)) {
        alert('El monto debe ser mayor a 0.');
        return;
    }

    // Clasificar la transacción
    let valorTransaccion;
    if (tipo === 'ingreso') {
        balanceTotal += monto; 
        valorTransaccion = monto;
    } else if (tipo === 'gasto') {
        balanceTotal -= monto;
        valorTransaccion = -monto;
    } else {
        alert('Tipo de transacción no válido.');
        return;
    }

    // Agregar la transacción al array
    transacciones.push(valorTransaccion);

    // Actualizar la interfaz
    actualizarInterfaz();
}

// Función para actualizar la interfaz
function actualizarInterfaz() {
    // Mostrar el balance total
    balance.textContent = balanceTotal.toFixed(2);

    // Ordenar transacciones: ingresos primero (mayor a menor), luego gastos (mayor a menor por valor absoluto)
    transacciones.sort((a, b) => {
        if (a > 0 && b > 0) return b - a;
        if (a < 0 && b < 0) return Math.abs(b) - Math.abs(a);
        return b - a;
    });

    // Mostrar las transacciones en la lista
    listaTransacciones.innerHTML = '';
    for (let transaccion of transacciones) {
        const li = document.createElement('li');
        li.textContent = transaccion > 0 
            ? `Ingreso: +$${transaccion}` 
            : `Gasto: -$${Math.abs(transaccion)}`;
        listaTransacciones.appendChild(li);
    }
}

// Manejar el evento submit del formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Obtener los datos del formulario
    const monto = parseFloat(document.getElementById('monto').value);
    const tipo = document.getElementById('tipo').value;

    // Registrar la transacción
    registrarTransaccion(tipo, monto);

    // Limpiar el formulario
    formulario.reset();
});