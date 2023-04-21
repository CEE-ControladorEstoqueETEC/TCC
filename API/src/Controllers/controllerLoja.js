import express, {application, response} from "express";

import service from '../Services/serviceLoja.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    
    const {storeName, businessLine, email, corporateName, owner, contactName, contactPhone, phone, country, cep, adressNumber, adressSupplement} = request.body;

    try{
        
        await service.createStore(storeName, businessLine, email, corporateName, owner, contactName, contactPhone, phone, country, cep, adressNumber, adressSupplement);

        response.status(200).send("Successful registration!")
    }catch(error){
        response.status(500).send({message: `Houve um erro na comunicação com o servidor ${error}`})
    }
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