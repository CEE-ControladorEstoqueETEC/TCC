import database from '../Repository/connection.js';

async function createStore(storeName, businessLine, email, corporateName, owner, contactName, contactPhone, phone, country, adress, city, cep){
    const sql = 'insert into cadastro_loja(nome_loja, ramo_atividade, email, razao_social, proprietario, nome_contato, telefone_contato, telefone, pais, endereco, cidade, cep) values(?,?,?,?,?,?,?,?,?,?,?,?)';
        

    const data = [storeName, businessLine, email, corporateName, owner, contactName, contactPhone, phone, country, adress, city, cep];

    const conn = await database.connect();
    conn.query(sql, data);
    conn.end();
}

async function updateStore(storeName, corporateName, owner, businessLine, contactName, contactPhone, email, phone, country, adress, city, cep, id){
    const sql = 'update cadastro_loja set nome_loja = ?, razao_social = ?, proprietario = ?, ramo_atividade = ?, nome_contato = ?, telefone_contato = ?, email = ?, telefone = ?, pais = ?, endereco = ?, cidade = ?, cep = ? where id_loja = ?';

    const data = [storeName, corporateName, owner, businessLine, contactName, contactPhone, email, phone, country, adress, city, cep, id];

    const conn = await database.connect();
    conn.query(sql, data);
    conn.end();
}

async function deleteStore(id){
    const sql = 'delete from cadastro_loja where id_loja = ?'

    const data = [id]

    const conn = await database.connect()
    conn.query(sql,data)
    conn.end()
}

async function selectAll(){
    const sql = 'select * from cadastro_loja';

    const conn = await database.connect();
    const [result] = await conn.query(sql);
    conn.end();

    // console.log(result)
    return result;
}

export default {createStore, updateStore, deleteStore, selectAll};




