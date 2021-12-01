// Crie um arquivo js e nele inclua as variáveis nome e idade. 
//Atribua valores para as variáveis. Crie uma lógica para validar se a pessoa é maior de idade 
//e imprima uma mensagem de acordo com cada situação.

const nome = "Lucas";
const idade = 15;
const acompanhante = false;

console.log("Nome do cliente:", nome);
console.log("Idade do cliente:", idade);
console.log("Cliente tem acompanhante? True ou False?", acompanhante);

if(idade >= 18){
    console.log("Entrada Liberada. É maior de idade.");
}else if(acompanhante == true){
    console.log("Entrada Liberada. Menor de idade com acompanhante.");
}else{
    console.log("Entrada Proibida. Menor de idade sem acompanhante.");
}

//node .\logicaIdade.js