//Crie um arquivo index.js na raiz da pasta da atividade e execute os testes de crud utilizando as classes
// model e repository.

import Cliente from "./model/Cliente.js";
import ClienteRepository from "./repository/ClienteRepository.js";

console.log(' === ATIVIDADE 74 === ')

const cliente = new Cliente();
cliente.nome = "Spider";
cliente.sobrenome = "Man";
cliente.cidadania = "EUA";

const cRepository = new ClienteRepository(); // Inserir dado na table

await cRepository.create(cliente);

const clienteUp = new Cliente();
clienteUp.id = 1;
clienteUp.nome = "Mary Jane";
clienteUp.sobrenome = "Watson";
clienteUp.cidadania = "EUA";

await cRepository.update(clienteUp); // Atualizar dado na table

await cRepository.delete(4); // Deletando dados da table

const lista = await cRepo.read(); // Listando dados da table
console.log(lista);


