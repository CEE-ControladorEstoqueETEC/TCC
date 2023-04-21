import database from '../Repository/connection.js'

async function createProvider(corporationName, name, email, contact, phone, cnpj, stateInsc, productLine, cep, adressNumber, adressSupplement){
    const sql = `INSERT INTO fornecedores(        razao_social, nome_fornecedor, email_fornecedor, contato_fornecedor, telefone_fornecedor, cnpj_fornecedor,        inscricao_estadual, linha_produto, endereco_cep, endereco_numero, endereco_complemento)
    VALUES(?,?,?,?,?,?,?,?,?,?)`

    const data = [corporationName, name, email, contact, phone, cnpj, stateInsc, productLine, cep, adressNumber, adressSupplement]

    const conn = await database.connect();
    conn.query(sql, data)
    conn.end()
}

async function updateProvider(corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine, id){
    const sql = 'update fornecedores set razao_social = ?, email_fornecedor = ?, contato_fornecedor = ?, telefone_fornecedor = ?, cnpj_fornecedor = ?, endereco_fornecedor = ?, inscricao_estadual = ?, linha_produto = ? where id_fornecedor = ?'

    const data = [corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function deleteProvider(id){
    const sql = 'delete from fornecedores where id_fornecedor = ?'

    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function selectAll(){
    const sql = 'select * from fornecedores';

    const conn = await database.connect();
    const [result] = await conn.query(sql);
    conn.end();

    // console.log(result)
    return result;
}


export default {createProvider, updateProvider, deleteProvider, selectAll}