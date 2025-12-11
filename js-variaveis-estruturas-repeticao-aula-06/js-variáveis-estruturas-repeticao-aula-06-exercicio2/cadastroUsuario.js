const nomeUsuario = prompt("Digite o NOME completo do usuário:");
const emailUsuario = prompt("Digite o E-MAIL do usuário:");
let idadeUsuario = parseInt(prompt("Digite a IDADE do usuário:"));
let statusAtivo = true;
let numeroDeLogins = 0;

console.log(`\n--- FICHA DE CADASTRO (Dados Iniciais) ---`);
console.log(`Nome: ${nomeUsuario}`);
console.log(`E-mail: ${emailUsuario}`);
console.log(`Idade: ${idadeUsuario}`);
console.log(`Status Ativo: ${statusAtivo}`);
console.log(`Logins Realizados: ${numeroDeLogins}`);
console.log('-------------------------------------------');

numeroDeLogins = numeroDeLogins + 1;
idadeUsuario = idadeUsuario + 1; 
statusAtivo = false;

console.log(`\n--- ATUALIZAÇÃO DO SISTEMA (Valores de LET Mudam) ---`);
console.log(`Idade Atualizada: ${idadeUsuario}`);
console.log(`Status Ativo Atualizado: ${statusAtivo}`);
console.log(`Logins Finais: ${numeroDeLogins}`);
console.log('----------------------------------------------------');