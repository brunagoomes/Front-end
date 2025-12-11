let numString = "10";
let numNumber = 10;
let numBoolean = true;

console.log("--- Comparação de Valor (==) ---");
console.log(`'10' == 10: ${numString == numNumber}`);
console.log(`1 == true: ${1 == numBoolean}`);
console.log(`0 == false: ${0 == false}`);

console.log("\n--- Comparação de Valor e Tipo (===) ---");
console.log(`'10' === 10: ${numString === numNumber}`);
console.log(`1 === true: ${1 === numBoolean}`);
console.log(`0 === false: ${0 === false}`);