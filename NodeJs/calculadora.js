//Crie um arquivo para criação de uma calculadora.
//Adicione 4 métodos para realizar as 4 operações básicas da matemática.
//Realize a chamada dos 4 métodos e imprima seus resultados.

console.log("1. Somar | 2. Subtrair | 3. Multiplicar | 4. Dividir\n");
console.log("Valor 1 = 15\nValor 2 = 4\n");

function soma(n1, n2){
    let soma = n1 + n2;
    return soma;
}
console.log("1. A soma dos valores é:", soma(15,4));

function subtrair(n1, n2){
    let subtrair = n1 - n2;
    return subtrair;
}
console.log("2. A subtração dos valores é:", subtrair(15,4));

function multiplicar(n1, n2){
    let multiplicar = n1 * n2;
    return multiplicar;
}
console.log("3. A multiplicação dos valores é:", multiplicar(15,4));

function divisao(n1, n2){
    let divisao = n1 / n2;
    return divisao;
}
console.log("4. A divisão dos valores é:", divisao(15,4));



// cd NodeJs
//node .\calculadora.js