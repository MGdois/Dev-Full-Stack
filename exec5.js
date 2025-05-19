const prompt = require("prompt-sync")();

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

let peso = Number(prompt("Digite o peso em kg: "));
let altura = Number(prompt("Digite a altura em metros: "));
let imc = peso / altura ** 2;

console.log(`IMC = ${imc.toFixed(1)}`);

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}