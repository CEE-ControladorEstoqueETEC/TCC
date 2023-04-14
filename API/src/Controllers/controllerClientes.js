import express, {application} from "express";
import service from '../Services/serviceClientes.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number} = request.body;
    
    try{
        await service.createCustomer(name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number);

        response.status(200).send({message: "Successful registration!"})
    }catch(error){
        response.status(500).send({message: `Houve um erro na comunicação com o servidor ${error}`})
    }
})

routes.get("/", async (request, response) =>{
    try{
        
        const result = await service.selectAll()

        if(result.length > 0){
            response.status(200).send(result)            
        }else{
            response.status(404).send({message: "Nenhum registro encontrado"})
        }

    }catch(error){
        response.status(500).send({message: "Houve um erro ao conectar com o servidor", error: `${error}`});
    }
})

routes.put("/", async (request, response) => {
    const { name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number, id } = request.body;

    try{        
        await service.updateCustomer(name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number, id)

        response.status(200).send("Successful update!")
    }catch(error){
        response.status(500).send({message: `Houve um erro na comunicação com o servidor ${error}`})
    }
})

export default routes;