function gerarFibonacci(n) {
    let sequencia = [0, 1];

    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return sequencia;

    for (let i = 2; i < n; i++) {
        
        let proximoNumero = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoNumero);
    }

    return sequencia;
}


let nTermos = 10;
console.log(`Os primeiros ${nTermos} números de Fibonacci são:`, gerarFibonacci(nTermos));