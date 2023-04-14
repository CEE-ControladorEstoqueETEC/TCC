import React, { useState } from 'react'
import '../FormularioLoja/formloja.css'
import LogoLoja from '../../assets/LogoLoja.PNG'
import MenuLateral from '../MenuLateral/MenuLateral'
import api from '../../api.js'

function FormCliente() {

  const [storeName, setStoreName] = useState('')
  const [businessLine, setBusinessLine] = useState('') 
  const [email, setEmail] = useState('') 
  const [corporateName, setCorporateName] = useState('') 
  const [owner, setOwner] = useState('') 
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('') 
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [adress, setAdress] = useState('') 
  const [city, setCity] = useState('') 
  const [cep, setCep] = useState('')

  async function handleRegister(event){
    event.preventDefault()
    try{
      const data =  {
        storeName, businessLine, email, corporateName, owner, contactName, contactPhone, phone, country, adress, city, cep
      }
      const response = await api.post('/store', data)

      alert(`Loja cadastrada com sucesso. ${storeName}`)

      setStoreName('')
      setBusinessLine('')
      setEmail('')
      setCorporateName('')
      setOwner('')
      setContactName('')
      setContactPhone('')
      setPhone('')
      setCountry('')
      setAdress('')
      setCity('')
      setCep('')

    }catch(error){
      alert('Erro no cadastro da loja')
      alert(error)
    }
  }

  return ( 

<div className='container-form'>
<MenuLateral/>

<div className='container-loja'>

    <form className='formulario-loja'>   

        <div className='div-loja'>
           <img src={LogoLoja} />

           <h2>Registre sua loja</h2>
        </div>

<div className='form-loja'>

                <div className='campos-form-div'> 
                      <label className='label-itens'>Nome da Loja</label>
                      <label className='label-itens'>Ramo da Atividade</label>
                      <label className='label-itens'>E-mail</label>
                      <label className='label-itens'>Nome do Contato</label>
                      <label className='label-itens'>Cep</label>
                      <label className='label-itens'>País</label>

                 </div>

                  <div className='inputs-form-loja'>
                      <input className='input-itens' type='text' placeholder='Nome da loja' value={storeName} onChange={e => setStoreName(e.target.value)} />
                      
                      <select className='select-loja' value={businessLine} onChange={e => setBusinessLine(e.target.value)}>
                          <option value=""> </option>
                          <option value="alimento">Alimentos</option>
                          <option value="roupas">Roupas</option>
                          <option value="calcados">Calçados</option>
                          <option value="limpeza">Limpeza</option>
                          <option value="cosmeticos">Cósmeticos</option>
                          <option value="maquiagem">Maquiagem</option>
                      </select>
                      
                      <input className='input-itens' type='email' placeholder='Email da loja' value={email} onChange={e => setEmail(e.target.value)}/>
                      
                      <input className='input-itens' type='text' placeholder='Nome do contato' value={contactName} onChange={e => setContactName(e.target.value)}/>
                      
                      <input className='input-itens' type='text' placeholder='CEP da loja' value={cep} onChange={e => setCep(e.target.value)}/>
                      
                      <input className='input-itens' type='text' placeholder='País' value={country} onChange={e => setCountry(e.target.value)}/>
                      
                        </div>
                        
                            


                 <div className='campos-form-div'>
                      <label className='label-itens'>Razão Social</label>
                      <label className='label-itens'>Proprietário</label>
                      <label className='label-itens'>Telefone</label>
                      <label className='label-itens'>Telefone do Contato</label>
                      <label className='label-itens'>Cidade</label>
                      <label className='label-itens'>Endereço</label>
                      
                 </div>  

                 <div className='inputs-form-loja'>          
                        <input className='input-itens' type='text' placeholder='Razão social' value={corporateName} onChange={e => setCorporateName(e.target.value)}/>
                        <input className='input-itens' type='text' placeholder='Propritário da loja' value={owner} onChange={e => setOwner(e.target.value)}/>
                        <input className='input-itens' type='tel' placeholder='Telefone da loja' value={phone} onChange={e => setPhone(e.target.value)}/>
                        <input className='input-itens' type='text' placeholder='Telefone do contato' value={contactPhone} onChange={e => setContactPhone(e.target.value)}/>
                        <input className='input-itens' type='text' placeholder='Cidade' value={city} onChange={e => setCity(e.target.value)}/>
                        <input className='input-itens' type='text' placeholder='Endereço' value={adress} onChange={e => setAdress(e.target.value)}/>

                 </div>
                
</div>

        <button className='botao-form-loja' onClick={handleRegister}>Registrar</button>                   
</form> 
</div>
<div> </div>
</div>  
  )
}

export default FormCliente