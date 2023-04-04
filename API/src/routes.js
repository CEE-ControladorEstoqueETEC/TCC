import express from "express";

import customer from './Controllers/controllerClientes.js'
import purchase from './Controllers/controllerFormCompra.js'
import sale from './Controllers/controllerFormVenda.js'
import provider from './Controllers/controllerFornecedores.js'
import store from './Controllers/controllerLoja.js'
import product from './Controllers/controllerProdutos.js'
import user from './Controllers/controllerUsuario.js'

const route = express();

route.use('/customer', customer)
route.use('/purchase', purchase)
route.use('/sale', sale)
route.use('/provider', provider)
route.use('/store', store)
route.use('/product', product)
route.use('/user', user)

export default route;