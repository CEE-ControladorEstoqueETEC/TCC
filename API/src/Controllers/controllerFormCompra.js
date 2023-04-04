import express, {application} from "express";
import service from '../Services/serviceFormCompra.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product} = request.body;

    try{
        await service.createPurchase(customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product);

        response.status(200).send({message: "Successful registration!"})
    }catch(error){
        response.status(500).send({message: `Houve um erro na comunicação com o servidor ${error}`})
    }
})

routes.put("/", async (request, response) => {
    const {customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product, id} = request.body;

    await service.createPurchase(customer, contact, paymentDeadline, purchaseDate, qtd, unityPrice, totalPrice, sendDeadline, paymentWay, provider, product, id);

    response.status(200).send("Successful registration!")
})

routes.get("/", async (request, response) =>{
    try{
        
        const result = await service.selectAll()

        if(result.length > 0){
            
            response.status(200).send({result})
            
        }else{
            response.status(404).send({message: "Nenhum registro encontrado"})
        }

    }catch(error){
        response.status(500).send({message: "Houve um erro ao conectar com o servidor", error: `${error}`});
    }
})

export default routes;