import express, {application} from "express";
import service from '../Services/serviceClientes.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number} = request.body;

    await service.createCustomer(name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number);

    response.status(200).send("Successful registration!")
})
/*
routes.get("/", async (request, response) => {
    const {} = request.body;
})
*/
routes.put("/", async (request, response) => {
    const { name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number, id } = request.body;

    await service.updateCustomer(name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number, id)

    response.status(200).send("Successful update!")
})

export default routes;