function isValidWalk(walk) {
    if (walk.length !== 10) return false;

    let x = 0
    let y = 0

    walk.forEach(direction => {
        if (direction == "n") y += 1
        if (direction == "s") y -= 1
        if (direction == "e") x += 1
        if (direction == "w") x -= 1
    }
    )
    return  x == 0 && y == 0 ? true : false
}

function testIsValidWalk() {
    const cases = [
        {
            walk: ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
            expected: true
        },
        {
            walk: ['n', 'n', 'n', 's', 's', 's', 's', 's', 's', 's'],
            expected: false
        },
        {
            walk: ['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'n', 's'],
            expected: true
        },
        {
            walk: ['n', 'e', 'e', 's', 'w', 'w', 'n', 's', 'n', 'e'],
            expected: false
        },
        {
            walk: ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
            expected: false
        },
        {
            walk: ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'],
            expected: true
        },
        {
            walk: ['n', 'n', 's', 's', 'e', 'w', 'e', 'w', 'n', 's'],
            expected: true
        },
        {
            walk: ['n', 'n', 'e', 'e', 's', 'w', 'w', 's', 'n', 'n'],
            expected: false
        }
    ];

    cases.forEach(({ walk, expected }, index) => {
        const result = isValidWalk(walk);
        console.log(`Test ${index + 1}:`, result === expected ? "✔ Passed" : "❌ Failed",
            `| Walk: [${walk}] | Expected: ${expected} | Got: ${result}`);
    });
}

testIsValidWalk();
