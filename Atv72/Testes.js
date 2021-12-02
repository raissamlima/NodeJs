//Crie as classes Pessoa, Pessoa Física e Pessoa Jurídica. Cada classe de estar em um arquivo separado. 
//A classe Pessoa deve ser a super classe das demais.
//Todos os atributos das classes devem ser privados e apenas acessíveis via métodos do tipo get e set.
//A Pessoa Física deve receber no construtor o CPF e a Pessoa Jurídica o CNPJ.
// Crie um arquivo para realizar os testes. Crie uma instância de objeto para cada classe, 
//realize as atribuições utilizando os métodos e imprima os objetos no terminal.

import {PessoaFisica} from './PessoaFisica.js';
import {PessoaJuridica} from './PessoaJuridica.js';


console.log("Realizando testes\n");

const pf = new PessoaFisica();
pf.nomePessoa = "Raissa Lima";
console.log("CPF:", pf.cpf);
console.log("Pessoa Física:", pf.nomePessoa);

console.log("\n");

const pj = new PessoaJuridica();
pf.nomeEmpresa = "JavaLovers";
console.log("CNPJ:", pj.cnpj);
console.log("Nome da Empresa:", pf.nomeEmpresa);


