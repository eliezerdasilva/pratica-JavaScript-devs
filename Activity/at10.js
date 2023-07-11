/* Crie um script que subtitua as letras conforme: a.A ->4 b.I(letra i) -> 1 c.E -> 3 d.) (letra ó) -> 0 (zero) e.s -> 5 */
let frase = prompt("Informe uma frase: ");

// Substituições
frase = frase.replace(/a/gi, "4");
frase = frase.replace(/b/gi, "1");
frase = frase.replace(/e/gi, "3");
frase = frase.replace(/ó/gi, "0");
frase = frase.replace(/s/gi, "5");

console.log("A frase com as substituições é:", frase);
