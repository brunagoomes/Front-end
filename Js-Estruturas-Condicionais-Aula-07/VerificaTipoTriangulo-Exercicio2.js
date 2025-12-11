let ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
let ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
let ladoC = parseFloat(prompt("Digite o comprimento do lado C:"));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("Os lados formam um triângulo.");

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Tipo: Equilátero (Todos os lados iguais)");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Tipo: Isósceles (Dois lados iguais)");
    } else {
        console.log("Tipo: Escaleno (Todos os lados diferentes)");
    }

} else {
    console.log("Os lados digitados NÃO formam um triângulo.");
}