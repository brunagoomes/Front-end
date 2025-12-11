let saldo=500;
let juros=1/100;

function calculaSaldo(juros, saldo, aporte, retirada){

const SaldocomAporte = (saldo + aporte);

const rendimento = SaldocomAporte*juros;

const NovoSaldo = SaldocomAporte + rendimento - retirada;


return NovoSaldo;
}
saldo = calculaSaldo(juros, saldo, 0, 0);

console.log(`O valor do saldo no primeiro mes é: ${saldo}`);

saldo = calculaSaldo(juros, saldo, 200, 0);

console.log(`O valor do saldo no segundo mes é: ${saldo}`);

saldo = calculaSaldo(juros, saldo, 0, 50);

console.log(`O valor do saldo no terceiro mes é: ${saldo}`);

saldo = calculaSaldo(juros, saldo, 0, 0);

console.log(`O valor do saldo no quarto mes é: ${saldo}`);