/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function testObstacleCourse() {
    const cases = [
        {
            actions: ["run", "jump", "run"],
            track: "_|_|_",
            expected: { track: "_/|/_", result: true }
        },
        {
            actions: ["run", "jump", "run", "jump"],
            track: "_|_|_|_",
            expected: { track: "_/|/|/_", result: true }
        },
        {
            actions: ["jump", "run"],
            track: "_|_",
            expected: { track: "x/", result: false }
        },
        {
            actions: ["run", "run", "jump"],
            track: "_|_",
            expected: { track: "/|x", result: false }
        },
        {
            actions: ["run", "jump"],
            track: "|_",
            expected: { track: "/x", result: false }
        },
        {
            actions: ["jump", "run", "jump"],
            track: "_|_|_",
            expected: { track: "x/|x_", result: false }
        },
        {
            actions: ["run", "run", "run"],
            track: "_|_|_",
            expected: { track: "/|/|_", result: false }
        },
        {
            actions: ["run"],
            track: "_",
            expected: { track: "_", result: true }
        },
        {
            actions: ["jump"],
            track: "|",
            expected: { track: "|", result: true }
        },
        {
            actions: [],
            track: "_|_|_",
            expected: { track: "_|_|_", result: true }
        },
        {
            actions: ["jump", "jump", "jump"],
            track: "_|_|_",
            expected: { track: "xxx", result: false }
        }
    ];

    cases.forEach(({ actions, track, expected }, index) => {
        const result = obstacleCourse(actions, track);
        const passed = result.track === expected.track && result.result === expected.result;
        console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
            `| Actions: [${actions}] | Track: "${track}" | Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(result)}`);
    });
}

testObstacleCourse();
