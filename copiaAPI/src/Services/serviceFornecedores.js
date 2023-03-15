import database from '../Repository/connection.js'

async function createProvider(name, corporationName, cnpj, contact, email, phone, stateInsc, productLine, adressCep, street, number, city, state, neighborhood ){
    const sql = 'insert into fornecedores(nome_fornecedor, razao_social, cnpj_fornecedor, contato_fornecedor, email_fornecedor, telefone_fornecedor, inscricao_estadual, linha_produto,endereco_cep, endereco_rua, endereco_numero, endereco_cidade, endereco_estado, endereco_bairro) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)'

    const data = [name, corporationName, cnpj, contact, email, phone, stateInsc, productLine, adressCep, street, number, city, state, neighborhood]

    const conn = await database.connect()
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

export default {createProvider, updateProvider, deleteProvider}