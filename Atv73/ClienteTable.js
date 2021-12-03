//Crie uma classe ClienteTable e realize as configurações da nova tabela.

import { Sequelize } from "sequelize";
import DataBase from "./DataBase.js";

const ClienteTable = DataBase.define('cliente',{
    id:{
        type: Sequelize.INTEGER,
        allowNulle: false, //Não permite valores falsos,
        autoIncrement: true,
        primaryKey: true //Chave primária | Último elem. não precisa da vírgula no final;
    },
    nome:{
        type: Sequelize.STRING,
        //Pode determinar o valor (charset). Ex: String(50),
        allowNulle: false
    },
    sobrenome:{
        type: Sequelize.STRING,
        allowNulle: false
    },
    cidadania:{
        type: Sequelize.STRING,
        allowNulle: false
    }
});

export default ClienteTable;

//define: Para definir como será minha tabela
//,{} = Propriedades da tabela, que ficam entre as chaves 
// Dicas sobre Json https://dicasdeprogramacao.com.br/o-que-e-json/