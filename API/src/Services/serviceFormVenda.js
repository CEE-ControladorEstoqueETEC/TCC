import database from '../Repository/connection.js';

async function createSale(email, phone, saleDate, qtd, unityPrice, totalPrice, deadline, paymentWay, provider, product, costumer){
    const sql = 'insert into formulario_vendas(email, telefone, data_venda, quantidade, valor_unitario, valor_total, prazo_entrega, forma_pagamento, FK_id_forn, FK_id_prod, FK_id_cli) values(?,?,?,?,?,?,?,?,?,?,?)'

    const data = [email, phone, saleDate, qtd, unityPrice, totalPrice, deadline, paymentWay, provider, product, costumer]

    const conn = await database.connect()
    conn.query(sql,data)
    conn.end()
}

async function updateSale(email, phone, saleDate, qtd, unityPrice, totalPrice, deadline, paymentWay, provider, product, costumer, id){
    const sql = 'update formulario_vendas set email = ?, telefone = ?, data_venda = ?, quantidade = ?, valor_unitario = ?, valor_total = ?, prazo_entrega = ?, forma_pagamento = ?, FK_id_forn = ?, FK_id_prod = ?, FK_id_cli = ? where id_venda = ?'

    const data = [email, phone, saleDate, qtd, unityPrice, totalPrice, deadline, paymentWay, provider, product, costumer, id]

    const conn = await database.connect()
    conn.query(sql,data)
    conn.end()
}

async function deleteSale(id){
    const sql = 'delete from formulario_vendas where id_venda = ?'

    const data = [id]

    const conn = await database.connect()
    conn.query(sql,data)
    conn.end()
}

export default {createSale, updateSale, deleteSale}