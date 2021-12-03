//Crie uma camada de banco de dados e nela adicione a classe Database.
//Na classe database, crie uma instância da classe Sequelize e adicione as configurações do seu banco de dados.

import Sequelize from 'sequelize'

const DataBase = new Sequelize(
    'postgres',
    'postgres',
    '123456',
    {
        host: 'localhost',
        port: 5433,
        dialect: 'postgres'
    }
);

export default DataBase;