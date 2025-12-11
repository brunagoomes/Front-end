let usuarioCorreto = "admin";
let senhaCorreta = "senha123";
let usuarioDigitado = "admin";
let senhaDigitada = "senha123";
let contaAtiva = true;
let isPremium = false;

let credenciaisValidas = (usuarioDigitado === usuarioCorreto) && (senhaDigitada === senhaCorreta);
let acessoPermitido = credenciaisValidas && contaAtiva;

let podeAcessarPremium = acessoPermitido || isPremium;

let contaInativa = !contaAtiva;

console.log(`Credenciais Válidas: ${credenciaisValidas}`);
console.log(`Acesso Permitido (Credenciais + Ativa): ${acessoPermitido}`);
console.log(`Pode Acessar Recurso Premium (Acesso OU Premium): ${podeAcessarPremium}`);
console.log(`Conta Inativa (!ativa): ${contaInativa}`);