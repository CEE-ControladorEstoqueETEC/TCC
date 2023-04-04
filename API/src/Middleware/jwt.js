import jwt from 'jsonwebtoken'

// criar o token




// validar o token
function verifyToken(request, response, next){
    const myKey = "3ss@é@Ch@v3De3nqu@droDoM3nó"

    const authHeader = request.headers.authorization

    if(!authHeader){
        return response.status(401).send({message: "Token não enviado!"})
    }

    const part = authHeader.split(" ");

    if(part.lenght !== 2){
        return response.status(401).send({message: "Token no formato inválido!"})
    }

    const [format, token] = part;

    if(format !== 'Bearer'){
        return response.status(401).send({message: "Token não contém 'Bearer'"})
    }

    jwt.verify(token, myKey, (err, decoded) => {
        if(err){
            return response.status(401).send({message: "Sessão encerrada, usuário não está logado!"})
        }
        return next();
    })
}


// enviar token pro frontend




export default { verifyToken }
