// utils.js
/**
 * Ordena las transacciones: ingresos primero (mayor a menor), luego gastos (mayor a menor por valor absoluto)
 * @param {number[]} transacciones - Array de transacciones
 * @returns {number[]} Array de transacciones ordenadas
 */
const ordenarTransacciones = (transacciones) => {
    return transacciones.sort((a, b) => {
        if (a > 0 && b > 0) return b - a; // Ordenar ingresos de mayor a menor
        if (a < 0 && b < 0) return Math.abs(b) - Math.abs(a); // Ordenar gastos de mayor a menor
        return b - a; // Ingresos primero, luego gastos
    });
};

/**
 * Valida el monto de una transacción
 * @param {number} monto - Monto de la transacción
 * @returns {boolean} True si el monto es válido, false en caso contrario
 */
const validarMonto = (monto) => {
    return monto > 0;
};

/**
 * Clasifica el tipo de transacción
 * @param {string} tipo - Tipo de transacción ('ingreso' o 'gasto')
 * @param {number} monto - Monto de la transacción
 * @returns {number} Valor de la transacción (positivo o negativo)
 */
const clasificarTransaccion = (tipo, monto) => {
    switch(tipo) {
        case 'ingreso':
            return monto;
        case 'gasto':
            return -monto;
        default:
            throw new Error('Tipo de transacción no válido');
    }
};

export { 
    calcularBalance, 
    ordenarTransacciones, 
    validarMonto, 
    clasificarTransaccion 
};