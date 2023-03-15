import express, {application, response} from "express";

import service from '../Services/serviceFornecedores.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {name, corporationName, cnpj, contact, email, phone, stateInsc, productLine, adressCep, street, number, city, state, neighborhood} = request.body;

    await service.createProvider(name, corporationName, cnpj, contact, email, phone, stateInsc, productLine, adressCep, street, number, city, state, neighborhood);

    response.status(200).send("Successful registration!")
})

export default routes;