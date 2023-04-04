import express, {application} from "express";
import service from '../Services/serviceUsuario.js';
import { generatePassword } from "../Helpers/loginActions.js";
import { body, validationResult } from 'express-validator';

const routes = express.Router();

routes.post("/", [
    body("name"),
    body("email"),
    body('password').isLength({ min: 5, max: 30 }).withMessage("Senha precisa ter pelo menos 5 caracteres."),
    body('passwordConfirm').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
    })
],async (request, response) => {
        const {name, email, password, confirmPassword} = request.body; 
        
        try{

        await service.createUser(name, email, password, confirmPassword);

        response.status(200).send({message: "Successful registration!"})
    }catch(error){
        response.status(500).send({message: "Houve um erro ao conectar com o servidor", error: `${error}`});
    }
})


routes.put("/", async (request, response) => {
    const { name, email, contact, phone, cellphone, cpf, adressCep, adressStreet, adressState, adressNeighborhood , adressNumber, id } = request.body;
    
    try{    
        await service.updateCustomer(name, email, contact, phone, cellphone, cpf, adressCep, adressStreet, adressState, adressNeighborhood , adressNumber, id)

        response.status(200).send("Successful update!")
    }catch(error){
        response.status(500).send({message: "Houve um erro ao conectar com o servidor", error: `${error}`});
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

//  ####################################### Funções para login #######################################
routes.post("/login", async (request, response) => {
    
    const {email, password} = request.body;
    console.log(email, password)
    try{
        const users = await service.loginUser(email, password)

        

        if(users.length > 0){
            response.status(200).send({message: "Login efetuado com sucesso!"})    
        } else{
            response.status(401).send({message: "Login incorreto!"})
        }        
    }catch(error){
        response.status(500).send({message: `Houve um erro na conexão com o servidor. ${error}`})
    }
})

routes.post('/reset-login', async (request, response) => {
    const {email} = request.body;

    try{
        const users = await service.checkEmail(email);

        if(users.length > 0){
            const newPassword = generatePassword();

            await service.changePassword(email, newPassword);
            response.status(200).send({message: `Nova senha: ${newPassword}`})
        }else{
            response.status(401).send({message: "Usuário não encontrado!"})
        }
    }catch(error){
        response.status(500).send({message: `Houve um erro na conexão com o servidor. ${error}`})
    }
})

export default routes;