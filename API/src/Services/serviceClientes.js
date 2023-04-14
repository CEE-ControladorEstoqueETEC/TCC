import database from '../Repository/connection.js';

async function createCustomer(name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number){
    const sqlBegin = `begin
    insert into clientes(nome_cliente, email_cliente, contato_cliente, telefone_cliente, celular_cliente, cpf_cliente, endereco_cep, endereco_rua, endereco_estado, endereco_bairro, endereco_cidade, endereco_numero) values (?,?,?,?,?,?,?,?,?,?,?,?)`



    const data = [name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number];

    const conn = await database.connect();
    conn.query(sql,data);
    conn.end();
}

async function updateCustomer(name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine, id){
    const sql = 'update clientes set nome_cliente = ?, email_cliente = ?, contato_cliente = ?, telefone_cliente = ?, celular_cliente = ?, cpf_cliente = ?, cnpj_cliente = ?, endereco_cliente = ?, inscricao_estadual = ?, forma_pagamento = ?, linha_atuacao = ? where id_cliente = ?';

    const data = [name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine, id];

    const conn = await database.connect();
    conn.query(sql,data);
    conn.end();
}

async function selectAll(){
    const sql = 'select * from clientes';

    const conn = await database.connect();
    const [result] = await conn.query(sql);
    conn.end();

    return result;
}

async function deleteCustomer(id){
    const sql = 'delete from clientes where id = ?';
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data);
    conn.end();
}

export default {createCustomer, updateCustomer, selectAll, deleteCustomer};