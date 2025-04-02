/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function daysBetweenDates(date1, date2){

    const isValidDate = (date) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(date);
    };

    if (!isValidDate(date1) || !isValidDate(date2)) {
        throw new Error("Invalid date format");
    }

    const [day1, month1, year1] = date1.split("/")
    const [day2, month2, year2] = date2.split("/")
    dateOne = new Date(year1, month1 - 1, day1)
    dateTwo = new Date(year2, month2 - 1, day2)
    return Math.abs((dateOne-dateTwo)/(1000*3600*24))
}

function testDaysBetweenDates() {
    const cases = [
        { date1: "01/01/2020", date2: "02/01/2020", expected: 1 },
        { date1: "01/01/2020", date2: "01/01/2021", expected: 366 },
        { date1: "15/06/2023", date2: "25/06/2023", expected: 10 },
        { date1: "31/12/1999", date2: "01/01/2000", expected: 1 },
        { date1: "01/03/2024", date2: "01/03/2023", expected: 366 },
        { date1: "29/02/2024", date2: "01/03/2024", expected: 1 },
        { date1: "01/01/2000", date2: "01/01/2100", expected: 36525 },
        { date1: "05/05/2020", date2: "05/05/2020", expected: 0 },
        { date1: "31/12/2021", date2: "01/01/2022", expected: 1 },
        { date1: "28/02/2019", date2: "01/03/2019", expected: 1 },
        { date1: "invalid", date2: "01/01/2022", expected: "Exception" },
        { date1: "01/01/2022", date2: "invalid", expected: "Exception" }
    ];

    cases.forEach(({ date1, date2, expected }, index) => {
        try {
            const result = daysBetweenDates(date1, date2);
            const passed = result === expected;
            console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Input: ("${date1}", "${date2}") | Expected: ${expected} | Got: ${result}`);
        } catch (error) {
            const passed = expected === "Exception";
            console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Input: ("${date1}", "${date2}") | Expected: Exception | Got: Exception`);
        }
    });
}

testDaysBetweenDates();