import database from '../Repository/connection.js';

async function createCustomer(name, email, contact, phone, cellphone, cep, adressNumber, adressSupplement, typeCustomer, cpf, rg, corporateName, cnpj, stateInsc){

    try{
        const insCliente = `BEGIN
            INSERT INTO clientes(
                nome_cliente, email_cliente, contato_cliente, telefone_cliente, celular_cliente, endereco_cep, endereco_numero, endereco_complemento, tipo_cliente) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?);`;
        const dadosGeral = [name, email, contact, phone, cellphone,	cep, adressNumber, adressSupplement, typeCustomer]        
        
        const conn = await database.connect();
        conn.query(insCliente, dadosGeral);

        const newId = `select id_cliente from clientes where id_cliente = (select max(id_cliente) from clientes);`
    
        const [newCustomer] = conn.query(newId);
        conn.end();
        
        // console.log(newCustomer)

        const insJuridico = `INSERT INTO cliente_juridico(
            FK_id_cliente, razao_social, cnpj_cliente, inscricao_estadual)
            VALUES(?,?,?,?);`

        const insFisico = `INSERT INTO cliente_fisico(
            FK_id_cliente, cpf_cliente, rg_cliente)
            VALUES(?,?,?);`
        

        if(typeUser == '' || typeUser.length <= 0){
        
        }
        else{
            if(typeUser == 'PJ'){
                const dados = [newCustomer, corporateName, cnpj, stateInsc];
                
                conn.query(sql, dados);
                conn.end();
            }
            if(typeUser == 'PF'){
                const dados = [newCustomer, cpf, rg];
                
                conn.query(sql, dados);
                conn.end();
            }
        }
    }catch(error){
        const conn = await database.connect();
        conn.query("ROLLBACK;");
        conn.end();
    }

}











async function updateCustomer(name, email, contact, phone, cellphone, cep, adressNumber, adressSupplement, typeCustomer, cpf, rg, corporateName, cnpj, stateInsc, id){
    
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