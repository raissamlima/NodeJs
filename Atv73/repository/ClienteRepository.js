// Crie uma camada repository  e crie a classe ClienteRepository. 
// Na classe, adicione os quatro métodos de crud que realizarão as operações no banco através dos métodos
// do sequelize.

import ClienteTable from "../ClienteTable.js";

// Métodos CRUD

class ClienteRepository{

    async create(model){
        return await ClienteTable.create(model);
    }

    async read(model){
        return await ClienteTable.findAll(model);
        //findAll para pegar todos os elementos da tabela,
    }

    async update(model){
        return await ClienteTable.update(model, {where: {id}});
    }
    async delete(model){
        return await ClienteTable.destroy({where: {id: id}});
    }
}

export default ClienteRepository;
