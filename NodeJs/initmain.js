// Execute o comando npm init, para criar um novo módulo js.
// Crie duas classes, Produto e Categoria, cadas classe deve estar em um arquivo separado.
// Crie um terceiro arquivo para realizar os testes. Instancie um objeto de cada classe, 
// atribua valores e imprima os objetos no terminal.

import {Produto} from './init.js';
import {Categoria} from './init2.js';

console.log("Realizando testes");

const produto = new Produto();
    produto.notebook = "DELL";
    produto.mouse = "MousePad";
    produto.teclado = "Sem fio";
    console.log(produto);

const categoria = new Categoria();
    categoria.computador = "Acessórios";
    categoria.ti = "Tudo sobre Tecnologia";
    console.log(categoria);   

// cd NodeJs
// node .\initmain.js