import express, {application} from "express";
import service from '../Services/serviceUsuario.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {name, email, password} = request.body;

    await service.createUser(name, email, password);

    response.status(200).send("Successful registration!")
})

routes.get("/login/:email", async (request, response) => {
    const json = {"erro":"", "result":{}}

    const {email, password} = request.body;

    const data = await service.loginUser(email, password)

    if(data){
        json.result = data;
    }
    response.json(json)
    response.status(200).send("Successful login!")
})

routes.put("/", async (request, response) => {
    const { name, email, contact, phone, cellphone, cpf, adressCep, adressStreet, adressState, adressNeighborhood , adressNumber, id } = request.body;

    await service.updateCustomer(name, email, contact, phone, cellphone, cpf, adressCep, adressStreet, adressState, adressNeighborhood , adressNumber, id)

    response.status(200).send("Successful update!")
})

export default routes;