function validarMonto(monto) {
    if (isNaN(monto) || monto <= 0) {
        return false;  // Si el monto no es un número o es menor o igual a 0, retorna false
    }
    return true;  // Si el monto es válido (es un número y es mayor que 0), retorna true
}

// Función para validar el tipo de transacción
function validarTipo(tipo) {
    // Verifica si el tipo es "ingreso" o "gasto"
    if (tipo === 'ingreso' || tipo === 'gasto') {
        return true;
    } else {
        return false;  // Si el tipo no es válido, retorna false
    }
}

// Exportar la función para poder usarla en app.js
export { validarTipo };
