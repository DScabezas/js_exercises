/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    const keys = Object.keys(data[0]);
    const displayHeaders = keys.map(h => h[0].toUpperCase() + h.slice(1));
    const widths = keys.map((k, i) => Math.max(displayHeaders[i].length, ...data.map(r => String(r[k]).length)));
    let top = '+';
    widths.forEach(w => top += '-'.repeat(w + 2) + '+');
    let head = '|';
    displayHeaders.forEach((h, i) => head += ` ${h.padEnd(widths[i], ' ')} |`);
    let mid = '+';
    widths.forEach(w => mid += '-'.repeat(w + 2) + '+');
    let rows = data.map(r => {
      let line = '|';
      keys.forEach((k, i) => line += ` ${String(r[k]).padEnd(widths[i], ' ')} |`);
      return line;
    }).join('\n');
    return `${top}\n${head}\n${mid}\n${rows}\n${top}`;
  }
  

function testDrawTable() {
    const testCases = [
        {
            input: [
                { name: 'Alice', city: 'London' },
                { name: 'Bob', city: 'Paris' },
                { name: 'Charlie', city: 'New York' }
            ],
            expected: `+---------+-----------+
  | Name    | City      |
  +---------+-----------+
  | Alice   | London    |
  | Bob     | Paris     |
  | Charlie | New York  |
  +---------+-----------+`
        },
        {
            input: [
                { gift: 'Doll', quantity: 10 },
                { gift: 'Book', quantity: 5 },
                { gift: 'Music CD', quantity: 1 }
            ],
            expected: `+----------+----------+
  | Gift     | Quantity |
  +----------+----------+
  | Doll     | 10       |
  | Book     | 5        |
  | Music CD | 1        |
  +----------+----------+`
        },
        {
            input: [
                { product: 'Apple', price: 2 },
                { product: 'Banana', price: 1 },
                { product: 'Cherry', price: 3 }
            ],
            expected: `+----------+-------+
  | Product  | Price |
  +----------+-------+
  | Apple    | 2     |
  | Banana   | 1     |
  | Cherry   | 3     |
  +----------+-------+`
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = drawTable(input);
        const passed = result === expected;
        console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
            `| Input: ${JSON.stringify(input)}\n| Expected:\n${expected}\n| Got:\n${result}\n`);
    });
}

testDrawTable();
