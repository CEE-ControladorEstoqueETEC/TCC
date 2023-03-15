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

async function loginUser(email, password){
    
    const sql = 'select email, senha from usuarios where email = ? and senha = ?';

    const data =  [email, password]

    return new Promise(async (aceito, rejeitado)=>{
        const conn = await database.connect();
        conn.query(sql,data, (error,results)=>{
            if(error) {rejeitado(error); return;}
            if(results > 0){
                aceito(results[0])
            }else{
                rejeitado('Usuário ou senha inválido');
            }

        });
        conn.end();
    })
        
}

async function deleteUser(id){
    const sql = 'delete from clientes where id = ?';
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data);
    conn.end();
}

export default {createUser, updateUser, loginUser, deleteUser};