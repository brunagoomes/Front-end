let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log(`Média Final: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log("Situação: APROVADO");
} else if (media >= 5 && media < 7) {
    console.log("Situação: RECUPERAÇÃO");
} else {
    console.log("Situação: REPROVADO");
}