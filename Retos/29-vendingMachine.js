/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

function testExpendedora() {
    const cases = [
        {
            dinero: [100, 100], producto: 1,
            expected: { nombre: 'Agua', cambio: [100] }
        },
        {
            dinero: [200], producto: 2,
            expected: { nombre: 'Zumo', cambio: [] }
        },
        {
            dinero: [50, 100], producto: 3,
            expected: { nombre: 'Café', cambio: [50] }
        },
        {
            dinero: [10, 10], producto: 1,
            expected: { error: true, cambio: [10, 10] }
        },
        {
            dinero: [200], producto: 5,
            expected: { error: true, cambio: [200] }
        },
        {
            dinero: [100, 3], producto: 1,
            expected: { error: true, cambio: [100, 3] }
        },
        {
            dinero: [100, 100], producto: 4,
            expected: { nombre: 'Chocolate', cambio: [50] }
        },
        {
            dinero: [100, 50, 50], producto: 4,
            expected: { nombre: 'Chocolate', cambio: [] }
        }
    ];

    cases.forEach(({ dinero, producto, expected }, i) => {
        try {
            const result = expendedora(dinero, producto);
            const passed = JSON.stringify(result) === JSON.stringify(expected);
            console.log(`Test ${i + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Dinero: ${JSON.stringify(dinero)} | Producto: ${producto} | Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(result)}`);
        } catch {
            console.log(`Test ${i + 1}: ❌ Failed | Exception thrown`);
        }
    });
}
