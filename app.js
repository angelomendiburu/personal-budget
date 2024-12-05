const transacciones = [];

let balanceTotal = 0;

const formulario = document.getElementById('formTransaccion');
const listaTransacciones = document.getElementById('listaTransacciones');
const balance = document.getElementById('balance');

function registrarTransaccion(tipo, monto) {
    if (monto <= 0) {
        alert('El monto debe ser mayor a 0.');
        return;
    }

    let valorTransaccion;
    if (tipo === 'ingreso') {
        balanceTotal += monto; // Sumar al balance
        valorTransaccion = monto; // Ingreso en positivo
    } else if (tipo === 'gasto') {
        balanceTotal -= monto; // Restar del balance
        valorTransaccion = -monto; // Gasto en negativo
    } else {
        alert('Tipo de transacción no válido.');
        return;
    }

    // Agregar la transacción al array
    transacciones.push(valorTransaccion);

    actualizarInterfaz();
}

// Función para actualizar la interfaz
function actualizarInterfaz() {
    balance.textContent = balanceTotal.toFixed(2);

    transacciones.sort((a, b) => {
        if (a > 0 && b > 0) return b - a; 
        if (a < 0 && b < 0) return Math.abs(b) - Math.abs(a); 
        return b - a; 
    });

    // Mostrar las transacciones en la lista
    listaTransacciones.innerHTML = ''; // Limpiar la lista
    for (let transaccion of transacciones) {
        const li = document.createElement('li');
        li.textContent = transaccion > 0 
            ? `Ingreso: +$${transaccion}` 
            : `Gasto: -$${Math.abs(transaccion)}`;
        
        // Agregar clase según el tipo de transacción
        li.classList.add(transaccion > 0 ? 'ingreso' : 'gasto');
        listaTransacciones.appendChild(li);
    }
}

// Manejar el evento submit del formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Prevenir que la página se recargue

    // Obtener los datos del formulario
    const monto = parseFloat(document.getElementById('monto').value);
    const tipo = document.getElementById('tipo').value;

    registrarTransaccion(tipo, monto);

    formulario.reset();
});
