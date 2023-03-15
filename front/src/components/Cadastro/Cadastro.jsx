import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../../assets/Login.png'
import Logo from '../../assets/logo.PNG'
import '../Cadastro/Cadastro.css'
import api from '../../api';


function Cadastro() { 
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

async function handleRegistrer(event){
  event.preventDefault();
  try{
    const data = {
      name, email, password
    };
    const response = await api.post('/user', data);

    alert(`Usuário cadastrado com sucesso. Bem-vindo(a) ao sistema ${name}`);

    setName('');
    setEmail('');
    setPassword('');
  } catch(error){
    alert(`Erro no cadastro. Tente novamente. \nCodigo erro: ${error}`);
  }
}


  return (
    
    <div className='container-pai'>
            <header>
              <img src={Logo}/>
            </header>

          <div className='container-cadastro-pai'>
          
                <div className='container-imagem'>    
                    <img src={Login}/>    
                </div>


            <form onSubmit={handleRegistrer} className='container-cadastro'>
                  <h1>Cadastro</h1>

                  <label>Nome</label>
                  <input type='text' placeholder='Insira seu nome'
                  value={name} onChange={e=> setName(e.target.value)} required />

                  <label>E-mail</label>
                  <input type='email' placeholder='Insira seu e-mail' value={email} onChange={e=> setEmail(e.target.value)} required/>

                  <label>Senha</label>
                  <input type='password' placeholder='Insira a senha' value={password} onChange={e=> setPassword(e.target.value)} required/>

                  <button>Cadastrar</button>

                  <h4>Já tem cadastro?<Link to='/'>Login</Link></h4>
            </form>
          </div>
    </div>


  )
}

export default Cadastro