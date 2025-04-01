/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

function aspectRatio(ancho, alto) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const divisor = gcd(ancho, alto);
    return `${ancho/divisor}:${alto/divisor}`
}

console.log(aspectRatio(1920, 1080));
console.log(aspectRatio(1280, 720));
console.log(aspectRatio(1024, 768));