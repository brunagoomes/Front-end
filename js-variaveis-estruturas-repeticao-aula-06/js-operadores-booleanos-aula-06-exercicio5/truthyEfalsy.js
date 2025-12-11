let nome = "João";
let idade = 0;
let email = "";
let listaItens = [];
let objetoConfig = {};

if (nome) {
    console.log("Nome: Truthy (String não vazia)");
}

if (idade) {
    console.log("Idade: Truthy");
} else {
    console.log("Idade: Falsy (0 é false)");
}

if (email) {
    console.log("Email: Truthy");
} else {
    console.log("Email: Falsy (String vazia é false)");
}

if (listaItens) {
    console.log("Lista de Itens: Truthy (Array vazio é true)");
}

if (objetoConfig) {
    console.log("Objeto de Configuração: Truthy (Objeto vazio é true)");
}