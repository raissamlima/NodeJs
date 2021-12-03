import DataBase from "./DataBase.js";

import ClienteTable from "./ClienteTable.js";


DataBase
    .sync()
    .then( ()=> console.log('Sincronizando'))
    .catch( ()=> console.log('Erro'));