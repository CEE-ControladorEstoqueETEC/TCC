import database from '../Repository/connection.js'

async function createPurchase(customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product){
    const sql = 'insert into formulario_compra(nome_comprador, contato, prazo_pagamento, data_compra, quantidade, valor_unitario, valor_total, prazo_entrega, forma_pagamento, FK_cod_forn, FK_cod_prod) values(?,?,?,?,?,?,?,?,?,?,?)'

    const data = [customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product]

    const conn = await database.connect();
    conn.query(sql, data);
    conn.end();
}

async function updatePurchase(customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product, id){
    const sql = 'update formulario_compra set nome_comprador = ?, contato = ?, prazo_pagamento = ?, data_compra = ?, quantidade = ?, valor_unitario = ?, valor_total = ?, prazo_entrega = ?, forma_pagamento = ?, FK_cod_forn = ?, FK_cod_prod = ? where id_compra = ?'

    const data = [customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product, id]

    const conn = await database.connect();
    conn.query(sql, data);
    conn.end();
}

async function deletePurchase(id){
    const sql = 'delete from formulario_compra where id = ?';
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data);
    conn.end();
}

export default {createPurchase, updatePurchase, deletePurchase}