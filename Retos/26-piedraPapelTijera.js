/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function calcularGanador(jugadas) {
    let player1Wins = 0;
    let player2Wins = 0;

    for (const [jugada1, jugada2] of jugadas) {
        if (jugada1 === jugada2) {
            continue;
        }
        if (
            (jugada1 === "R" && jugada2 === "S") ||
            (jugada1 === "S" && jugada2 === "P") ||
            (jugada1 === "P" && jugada2 === "R")
        ) {
            player1Wins++;
        } else {
            player2Wins++;
        }
    }

    if (player1Wins > player2Wins) {
        return "Player 1";
    } else if (player2Wins > player1Wins) {
        return "Player 2";
    } else {
        return "Tie";
    }
}

function testPiedraPapelTijera() {
    const cases = [
        { input: [["R","S"], ["S","R"], ["P","S"]], expected: "Player 2" },
        { input: [["R","S"], ["R","S"], ["R","S"]], expected: "Player 1" },
        { input: [["P","P"], ["S","S"], ["R","R"]], expected: "Tie" },
        { input: [["S","P"], ["P","R"], ["R","S"]], expected: "Player 1" },
        { input: [["S","R"], ["R","P"], ["P","S"]], expected: "Player 2" },
        { input: [["R","P"], ["P","S"], ["S","R"]], expected: "Player 2" },
        { input: [["R","S"]], expected: "Player 1" },
        { input: [["P","R"]], expected: "Player 1" },
        { input: [["S","P"]], expected: "Player 1" },
        { input: [["R","R"], ["S","S"]], expected: "Tie" }
    ];

    cases.forEach(({ input, expected }, i) => {
        try {
            const result = calcularGanador(input);
            const passed = result === expected;
            console.log(`Test ${i + 1}:`, passed ? "✔ Passed" : "❌ Failed", `| Input: ${JSON.stringify(input)} | Expected: ${expected} | Got: ${result}`);
        } catch {
            console.log(`Test ${i + 1}: ❌ Failed | Exception thrown`);
        }
    });
}

testPiedraPapelTijera();