import database from '../Repository/connection.js';

async function createUser(name, email, password){
        const sql = 'insert into usuarios(nome_usuario, email, senha) values (?,?,?)';

        const data = [name, email, password];

        const conn = await database.connect();
        conn.query(sql,data);
        conn.end();
}

async function updateUser(name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine, id){
    const sql = 'update clientes set nome_cliente = ?, email_cliente = ?, contato_cliente = ?, telefone_cliente = ?, celular_cliente = ?, cpf_cliente = ?, cnpj_cliente = ?, endereco_cliente = ?, inscricao_estadual = ?, forma_pagamento = ?, linha_atuacao = ? where id_cliente = ?';

    const data = [name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine, id];

    const conn = await database.connect();
    conn.query(sql,data);
    conn.end();
}


async function deleteUser(id){
    const sql = 'delete from clientes where id = ?';
    const data = [id]
    
    const conn = await database.connect()
    conn.query(sql, data);
    conn.end();
}

async function selectAll(){
    const sql = 'select * from usuarios'

    const conn = await database.connect();
    const [result] = await conn.query(sql);
    conn.end();

    // console.log(result)
    return result;
}

// ####################################### Funções para login #######################################

async function loginUser(email, password){
    
    const sql = 'select * from usuarios where email = ? and senha = ?';

    const data =  [email, password]
    
    const conn = await database.connect();
    const [rows] = await conn.query(sql, data)
    conn.end();
        
    return rows;
}

async function checkEmail(email){
    const sql = 'select * from usuarios where email = ?';

    const conn = await database.connect();
    const [rows] = await conn.query(sql, email);
    conn.end()

    return rows;
}

async function changePassword(email, newPassword){
    const sql = 'update usuarios set senha = ? where email = ?';
    const data = [newPassword, email]

    const conn = await database.connect();
    await conn.query(sql, data);
    conn.end();
}


export default {createUser, updateUser, loginUser, deleteUser, changePassword, checkEmail, selectAll};