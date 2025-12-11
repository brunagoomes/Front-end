let nomeProduto = "celular iphone 15";
let preco = 5999.50;
let categoria = "eletrÔnicos";

let output1 = "O produto " + nomeProduto + " custa R$ " + preco + " e pertence à categoria " + categoria + ".";

let output2 = `O produto "${nomeProduto.toUpperCase()}" custa R$ ${preco.toFixed(2)} e pertence à categoria ${categoria.toLowerCase()}.`;

let output3 = nomeProduto.replace("iphone 15", "iPhone 15 Pro").trim();

console.log("--- Concatenação Tradicional ---");
console.log(output1);
console.log("\n--- Template Literals e Métodos ---");
console.log(output2);
console.log("\n--- Resultado do Método replace/trim ---");
console.log(output3);