let largura = 10;
let altura = 5;
let raio = 8;
let num1 = 15;
let num2 = 25;
let num3 = 45;

let areaRetangulo = largura * altura;
let perimetroCirculo = 2 * Math.PI * raio;
let mediaNumeros = (num1 + num2 + num3) / 3;

let divisaoPorZero = 10 / 0;
let operacaoInvalida = 10 * "abc";

console.log(`Área do Retângulo: ${areaRetangulo}`);
console.log(`Perímetro do Círculo: ${perimetroCirculo}`);
console.log(`Média dos Três Números: ${mediaNumeros}`);
console.log(`Divisão por Zero (Infinity): ${divisaoPorZero}`);
console.log(`Operação Inválida (NaN): ${operacaoInvalida}`);