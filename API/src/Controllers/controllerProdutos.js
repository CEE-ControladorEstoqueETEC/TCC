import express, {application} from "express";
import { body, validationResult } from "express-validator";
import service from '../Services/serviceProdutos.js';

const routes = express.Router();

routes.post("/",[
  body("name").isString().isLength({min: 3}).toLowerCase().withMessage("insira um nome valido"),
  body("provider").isNumeric().withMessage("teste"),
  body("category").isString().withMessage("teste"),
  body("unityPrice").isNumeric().withMessage("teste"),
  body("actualQtd").isNumeric().withMessage("teste"),
  body("minQtd").isNumeric().withMessage("teste"),
  body("maxQtd").isNumeric().withMessage("teste"),
], async (request, response) => {
  
  const {name, provider, category, unityPrice, actualQtd, minQtd, maxQtd} = request.body;
  
  try {

    await service.createProduct(name, provider, category, unityPrice, actualQtd, minQtd, maxQtd);

    response.status(200).send("Successful registration!")
  }catch(error){
    response.status(500).send({message: `Houve um erro na comunicação com o servidor ${error}`})
  }
})



routes.put("/",[
    body("name").isString().withMessage("teste"),
    body("provider").isString().withMessage("teste"),
    body("category").isString().withMessage("teste"),
    body("unityPrice").isString().withMessage("teste"),
    body("actualQtd").isString().withMessage("teste"),
    body("minQtd").isString().withMessage("teste"),
    body("maxQtd").isString().withMessage("teste"),
  ], async (request, response) => {
  
      const {name, provider, category, unityPrice, actualQtd, minQtd, maxQtd} = request.body;
    try{
      await service.createProduct(name, provider, category, unityPrice, actualQtd, minQtd, maxQtd);
  
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