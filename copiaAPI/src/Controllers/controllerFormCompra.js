import express, {application} from "express";
import service from '../Services/serviceFormCompra.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product} = request.body;

    await service.createPurchase(customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product);

    response.status(200).send("Successful registration!")
})

routes.put("/", async (request, response) => {
    const {customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product, id} = request.body;

    await service.createPurchase(customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product, id);

    response.status(200).send("Successful registration!")
})

export default routes;