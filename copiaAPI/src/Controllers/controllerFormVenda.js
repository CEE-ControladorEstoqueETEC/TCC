import express, {application} from "express";
import service from '../Services/serviceFormVenda.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {email, phone, saleDate, qtd, unityPrice, totalPrice, deadline, paymentWay, provider, product, costumer} = request.body;

    await service.createSale(email, phone, saleDate, qtd, unityPrice, totalPrice, deadline, paymentWay, provider, product, costumer);

    response.status(200).send("Successful registration!")
})

export default routes;