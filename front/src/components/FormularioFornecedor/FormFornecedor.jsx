import React, { useState } from 'react'
import LogoCliente from '../../assets/LogoCliente.PNG'
import '../FormularioFornecedor/FormFornecedor.css'
import MenuLateral from '../MenuLateral/MenuLateral'
import api from '../../api.js'

function FormFornecedor() {
        
        const [name, setName] = useState('')
        const [corporationName, setCorporationName] = useState('')
        const [cnpj, setCnpj] = useState('')
        const [contact, setContact] = useState('')
        const [email, setEmail] = useState('')
        const [phone, setPhone] = useState('')
        const [stateInsc, setStateInsc] = useState('')
        const [productLine, setProductLine] = useState('')
        const [adressCep, setAdressCep] = useState('')
        const [street, setStreet] = useState('')
        const [number, setNumber] = useState('') 
        const [city, setCity] = useState('')
        const [state, setState] = useState('')
        const [neighborhood, setNeighborhood] = useState('')
  
        async function handleRegister(event){
                event.preventDefault();
                try{
                        const data = { 
                                name, corporationName, cnpj, contact, email, phone, stateInsc, productLine, adressCep, street, number, city, state, neighborhood 
                        } 
                        const response = await api.post('/provider', data)

                        alert(`Fornecedor cadastrado com sucesso. ${corporationName}.`)

                        setName('')
                        setCorporationName('')
                        setCnpj('')
                        setContact('')
                        setEmail('')
                        setPhone('')
                        setStateInsc('')
                        setProductLine('')
                        setAdressCep('')
                        setStreet('')
                        setNumber('')
                        setCity('')
                        setState('')
                        setNeighborhood('')
                }catch(error){
                        alert("Erro no registro do fornecedor.")
                        alert(error)
                }
        }

        return (

<div className='container-fornecedor'>
        <MenuLateral/>
    <form className='formulario-fornecedor'>
         
            <div className='container-titulo-principal'>
                <img src={LogoCliente}/>
                <h2 className='title-form-fornecedor'>CADASTRO DO FORNECEDOR</h2>
            </div>

<div className='container-form-campos-fornecedor'>

                    <div className='container-campos'>
                            <label>Nome popular</label>
                            <label>CNPJ</label>
                            <label>Contato</label>
                            <label>Celular</label>
                            <label>CEP</label>
                            <label>Rua</label>
                            <label>Número</label>

                           
                   </div>
                            <div className='container-inputs'>
                                <input type='text' placeholder='Nome do fornecedor' value={name} onChange={e=> setName(e.target.value)}/>
                                <input type='text' placeholder='CNPJ do fornecedor' value={cnpj} onChange={e=> setCnpj(e.target.value)}/>
                                <input type='text' placeholder='Nome do contato' value={contact} onChange={e=> setContact(e.target.value)}/>
                                <input type='tel' placeholder='Telefone do fornecedor' value={phone} onChange={e=> setPhone(e.target.value)}/>
                                <input type='text' placeholder='CEP do fornecedor' value={adressCep} onChange={e=> setAdressCep(e.target.value)}/>
                                <input type='text' placeholder='Rua' value={street} onChange={e=> setStreet(e.target.value)}/>
                                <input type='text' placeholder='Número' value={number} onChange={e=> setNumber(e.target.value)}/>
                            </div>
                    <div className='container-campos'>
                            <label>Razão Social</label>
                            <label>Insc. Estadual</label>
                            <label>E-mail</label>
                            <label>Linha de atuação</label>
                            <label>Bairro</label>
                            <label>Cidade</label>
                            <label>Estado</label>
                    </div>

                    <div className='container-inputs'>
                                <input type='text' placeholder='Razão social' value={corporationName} onChange={e=> setCorporationName(e.target.value)}/>
                                <input type='text' placeholder='Inscrição Estadual' value={stateInsc} onChange={e=> setStateInsc(e.target.value)}/>
                                <input type='text' placeholder='Email do fornecedor' value={email} onChange={e=> setEmail(e.target.value)}/>
                                <input type='text' placeholder='Linha de atuação do fornecedor' value={productLine} onChange={e=> setProductLine(e.target.value)}/>
                                <input type='text' placeholder='Bairro' value={neighborhood} onChange={e=> setNeighborhood(e.target.value)}/>
                                <input type='text' placeholder='Cidade' value={city} onChange={e=> setCity(e.target.value)}/>
                                <input type='text' placeholder='Estado' value={state} onChange={e=> setState(e.target.value)}/>
                    </div>
</div>

            <button className='botao-form-fornecedor' onClick={handleRegister}>Cadastrar</button>

    </form>
    <div></div>
    </div>
  )
}

export default FormFornecedor