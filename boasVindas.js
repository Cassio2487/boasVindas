console.log("Bem-vindo(a) ao mundo da programação em JavaScript!");

let nome = "Cassio"; 
console.log(`Olá, ${nome}!`);

let valor1 = 10;
let valor2 = 20; 
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

valor1 = 30;
valor2 = 15; 
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let nota = 7.5; 

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(`Número aleatório: ${numeroAleatorio}`);

numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(`Número aleatório entre 1 e 10: ${numeroAleatorio}`);

numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
console.log(`Número aleatório entre 1 e 1000: ${numeroAleatorio}`);
