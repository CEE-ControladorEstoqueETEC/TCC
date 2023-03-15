import React, { useState } from 'react'
import '../Login/Login.css'
import Logi from '../../assets/Login.png'
import Logo from '../../assets/logo.PNG'
import { Link } from 'react-router-dom'
import api from '../../api.js'


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function handleLogin(event){
  //   event.preventDefault();
  //   try{
  //     const data = {
  //       email, password
  //     }
  //     const response = await api.get('/user/login', data)

  //     if(response.status === 200){
  //       alert(`Login efetuado com sucesso \n Bem vindo ao sistema.`)
  //     }
  //   }catch(error){
  //     alert("Usuário não encontrado. Verifique os dados e tente novamente.")
  //     alert(error)
  //   }
  // }

  return (

<div className='container'> 
            <header>
            <img src={Logo}/>
            </header>

    <div className='container-login-pai'>
  
            <div className='container-imagem'>    
                <img src={Logi}/>    
            </div>

            <div className='container-login'>
                <h1>Login</h1>
                <label>E-mail</label>
                <input type='email' placeholder='Insira seu e-mail' value={email} onChange={e=> e.setEmail(e.target.value)} required />
                <label>Senha</label>
                <input type='password' placeholder='Insira a senha' value={password} onChange={e=> e.setPassword(e.target.value)} required/>
                <h5>Esqueceu a senha? <Link to='/'>Resetar</Link></h5>
                <button>Entrar</button>
                <h5>Não tem login?<Link to='/cadastro'>Cadastro</Link></h5>
            </div>
    </div>
</div>
  )
}

export default Login