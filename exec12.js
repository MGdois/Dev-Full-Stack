const prompt = require("prompt-sync")();

/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

let num = Number(prompt("Digite um número de 1 a 10 para ver sua tabuada: "));

while (num < 1 || num > 10) {
    num = Number(prompt("Valor inválido. "));
}

for (let i = 1; i < 11; i++) {
    console.log(`${i} x ${num} = ${num * i}`);
}