let vitorias = 0;
let derrotas = 0;
let empates = 0;
let jogarNovamente;

const opcoes = ["pedra", "papel", "tesoura"];

do {
    
    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();
    
    
    if (!opcoes.includes(escolhaUsuario)) {
        alert("Opção inválida! Escolha apenas Pedra, Papel ou Tesoura.");
        continue;
    }

 
    let indiceAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = opcoes[indiceAleatorio];

    alert(`Computador escolheu: ${escolhaComputador}`);

    
    if (escolhaUsuario === escolhaComputador) {
        alert("Empate!");
        empates++;
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        alert("Você venceu!");
        vitorias++;
    } else {
        alert("Você perdeu!");
        derrotas++;
    }

    
    console.log(`Placar: Vitórias: ${vitorias} | Derrotas: ${derrotas} | Empates: ${empates}`);
    
    jogarNovamente = prompt("Deseja jogar outra rodada? (sim/nao)").toLowerCase();

} while (jogarNovamente === "sim" || jogarNovamente === "s");

alert(`Fim de jogo!\nResultado Final:\nVitórias: ${vitorias}\nDerrotas: ${derrotas}\nEmpates: ${empates}`);