function createXmasTree(height, ornament) {
    let arbol = '';
    for (let i = 1; i <= height; i++) {
        let stars = 2 * i - 1;
        let rellenoArbol = '_'.repeat((height - i));
        arbol += rellenoArbol + ornament.repeat(stars) + rellenoArbol + '\n';
    }
    
    // Base del árbol
    const base = '_'.repeat((height - 1)) + '#' + '_'.repeat((height - 1)) + '\n';
    const base1 = '_'.repeat((height - 1)) + '#' + '_'.repeat((height - 1));
    return arbol + base + base1;
}

console.log(createXmasTree(3, '='));
