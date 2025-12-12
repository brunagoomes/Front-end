function ePrimo(numero) {
    if (numero <= 1) return false; 

 
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    
    return true; 
}


let num = 29;
console.log(`${num} é primo? ${ePrimo(num) ? "Sim" : "Não"}`);