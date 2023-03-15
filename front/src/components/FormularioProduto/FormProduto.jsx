import React, { useState } from 'react'
import '../FormularioProduto/FormProduto.css'
import LogoProduto from '../../assets/LogoProduto.PNG'
import MenuLateral from '../MenuLateral/MenuLateral'
import api from '../../api.js'



function FormProduto() {


        const [name, setName] = useState ('')
        const [provider, setProvider] = useState ('')
        const [category, setCategory] = useState ('')
        const [unityPrice, setUnityPrice] = useState ('')
        const [actualQtd, setActualQtd] = useState ('')
        const [minQtd, setMinQtd] = useState ('')
        const [maxQtd, setMaxQtd] = useState ('')

        async function registerproduct(event){
                event.preventDefault();
                try{
                        const data = {
                                name, provider, category, unityPrice, actualQtd, minQtd, maxQtd
                        }
                
                        const response = await api.post('/product',data)
                        
                        alert(`Produto cadastrado com sucesso. ${name}`)

                        setName('')
                        setProvider('')
                        setCategory('')
                        setUnityPrice('')
                        setActualQtd('')
                        setMinQtd('')
                        setMaxQtd('')
                }catch(error){
                        alert(`Erro no cadastro do produto.`)
                       alert(error)
                }
        
        }




  return (
          
<div className='container-produto'>
        <MenuLateral/>
    <form className='formulario-produto'>

            <div className='titulo-principal-produto'>
                <img src={LogoProduto}/>
                <h2 className='title-form-produto'>CADASTRO DE PRODUTO</h2>
            </div>

<div className='pai-form-campos-produto'>

                    <div className='produtos-campos'>

                            <label>Nome Produto</label>
                            <label>Categoria</label>
                            <label>Código Fornecedor</label>
                            
                           
                   </div>
                            <div className='produtos-inputs'>
                                <input type='text' placeholder='Nome do produto' value={name} onChange={e=> setName(e.target.value)}/>
                                <select className='select-client'value={category} onChange={e=> setCategory(e.target.value)}>
                                        <option> </option>
                                        <option value='alimentos'>Alimentos</option>
                                        <option value='refrigerados' >Refrigerados</option>
                                        <option value='prolimpeza' >Produtos de Limpeza</option>
                                        <option value='higiene' >Higiene</option>
                                        <option value='Automotivo' >Automotivo</option>
                                </select>
                                <input type='number' placeholder='Codigo do fornecedor' value={provider} onChange={e=> setProvider(e.target.value)}/>
                                
                            </div>

                    <div className='produtos-campos'>  
                            <label>Quantidade Máxima</label>
                            <label>Quantidade Mínima</label>
                            <label>Preço</label>
                            <label>Quantidade</label>
                    </div>

                    <div className='produtos-inputs'>
                                <input type='number' placeholder='Quantidade Máxima' value={maxQtd} onChange={e=> setMaxQtd(e.target.value)}/>
                                <input type='number' placeholder='Quantidade Mínima' value={minQtd} onChange={e=> setMinQtd(e.target.value)}/>
                                <input type='number' placeholder='Preço do produto' value={unityPrice} onChange={e=> setUnityPrice(e.target.value)}/>
                                <input type='number' placeholder='Quantidade de produto' value={actualQtd} onChange={e=> setActualQtd(e.target.value)}/>
                         </div> 
</div>                  


                <button className='botao-form-produto' onClick={registerproduct}>Cadastrar</button>
    </form>
    <div></div>
    </div>
  )
}

export default FormProduto