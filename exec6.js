const prompt = require("prompt-sync")();

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

let a = Number(prompt("Digite o valor do lado A: "));
let b = Number(prompt("Digite o valor do lado B: "));
let c = Number(prompt("Digite o valor do lado C: "));

if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
        console.log("Triângulo eqüilátero");
    } else if (a != b && b != c) {
        console.log("Triângulo escaleno");
    } else {
        console.log("Triângulo isósceles");
    }
} else {
    console.log("Não foi possível fazer um triangulo");
}