let usuarioCorretoAdmin = "admin";
let senhaCorretaAdmin = "123456";

let usuarioDigitado = prompt("Usuário:");
let senhaDigitada = prompt("Senha:");

if (usuarioDigitado === usuarioCorretoAdmin && senhaDigitada === senhaCorretaAdmin) {
    console.log("Acesso de administrador");
} else if (usuarioDigitado === "usuario" && senhaDigitada === "teste") {
    console.log("Acesso de usuário");
} else {
    console.log("Acesso negado");
}