let notas = [];
let i = 0;
let soma = 0; 
let continuar;

do {

    let notaDigitada = parseFloat(prompt(`Escreva a nota do aluno ${i + 1}:`));
    

    notas[i] = notaDigitada;
    soma += notaDigitada; 
    
    i++; 

    continuar = prompt("Deseja digitar outra nota? (Sim/Não)");

} while (continuar.toLowerCase() === 'sim');


let media = soma / i;

console.log(`Você digitou ${i} notas.`);
console.log(`A média da turma é: ${media.toFixed(2)}`);