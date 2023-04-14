import React, { useState } from 'react'
import '../FormularioCliente/FormCliente.css'
import LogoCliente from '../../assets/LogoCliente.PNG'
import MenuLateral from '../MenuLateral/MenuLateral'
import api from '../../api'

function FormCliente() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [contact, setContact] = useState('');
const [phone, setPhone] = useState('');
const [cellphone, setCellphone] = useState('');
const [cpf, setCpf] = useState('');
const [adressCep, setAdressCep] = useState('');
const [street, setStreet] = useState('');
const [state, setState] = useState('');
const [neighborhood, setNeighborhood] = useState('');
const [city, setCity] = useState('');
const [number, setNumber] = useState('');


async function RegistrerClient(event){
  event.preventDefault();
  try{
    const data = {
      name, email, contact, phone, cellphone, cpf, adressCep, street, state, neighborhood, city, number
    };
    const response = await api.post('/customer', data);

    alert(`Cliente cadastrado com sucesso. ${name}`);

    setName('');
    setEmail('');
    setContact('');
    setPhone('');
    setCellphone('');
    setCpf('');
    setAdressCep('');
    setStreet('');
    setState('');
    setNeighborhood('');
    setCity('');
    setNumber('');

  } catch(error){
    alert(`Erro no cadastro. Tente novamente. \nCodigo erro: ${error}`);
  }
}



  return (

    <div className='container-cliente'> 
      <MenuLateral/>
    <form className='formulario-cliente' onSubmit={RegistrerClient}>
      
            <div className='div-titulo-principal'>
                <img src={LogoCliente}/>
                <h1 className='title-form-client'>CADASTRO DE CLIENTE</h1>
           </div>

<div className='divpai-form-campos-client'>

                    <div className='div-campos'>
                            <label>Nome </label>
                            <label>CPF / CNPJ</label>
                            <label>E-mail</label>
                            <label>Telefone</label>
                            <label>Celular</label>
                            <label>Contato</label>
                           
                   </div>
                            <div className='div-inputs'>
                                <input value={name} onChange={e=> setName(e.target.value)} required/>
                                <input value={cpf} onChange={e=> setCpf(e.target.value)} required/>
                                <input value={email} onChange={e=> setEmail(e.target.value)} required/>
                                <input value={phone} onChange={e=> setPhone(e.target.value)} required/>
                                <input value={cellphone} onChange={e=> setCellphone(e.target.value)} required/>
                                <input value={contact} onChange={e=> setContact(e.target.value)} required/>

                            </div>
                    <div className='div-campos'>
                            <label>CEP</label>
                            <label>Rua</label>
                            <label>Número</label>
                            <label>Bairro</label>
                            <label>Cidade</label>
                            <label>Estado</label>
                    </div>

                    <div className='div-inputs'>
                                <input value={adressCep} onChange={e=> setAdressCep(e.target.value)} required/>
                                <input value={street} onChange={e=> setStreet(e.target.value)} required/>
                                <input value={number} onChange={e=> setNumber(e.target.value)} required/>
                                <input value={neighborhood} onChange={e=> setNeighborhood(e.target.value)} required/>
                                <input value={city} onChange={e=> setCity(e.target.value)} required/>
                                <input value={state} onChange={e=> setState(e.target.value)} required/>
                    </div>
</div>
 
            
            
            <button className='botao-form-client'>Cadastrar</button>
    </form>
    <div>

      
    </div>
    </div>
  )
}

export default FormCliente