import React from 'react'
import '../FormularioCompra/formcompra.css'
import LogoCompra from '../../assets/LogoCompra.PNG'
import MenuLateral from '../MenuLateral/MenuLateral'


function FormularioCompra() {
  return (
 
    <div className='container-compra'>
      <MenuLateral/>
      
        <form className='form-compra-pai'>    

                <div className='pai-titulo-form-compra'>
                  <img src={LogoCompra} className='logocompra'/>
                   <h2 className='titulo-form-compra'>Formulário de Compra</h2>
                </div>

          <div className='pai-form-label-compra'>

                    <div className='campos-form-compra'>
                        <label className='label-itens-compra'>Cód Fornecedor</label>
                        <label className='label-itens-compra'>Cód Produto</label>
                        <label className='label-itens-compra'>Quantidade</label>
                        <label className='label-itens-compra'>Nome do Contato</label>
                    </div>

                    <div className='inputs-form-compra'>
                        <input className='input-itens-compra'/>
                        <input className='input-itens-compra'/>
                        <input className='input-itens-compra'/>
                        <input className='input-itens-compra'/>
                    </div>

                    <div className='campos-form-compra'>
                        <label className='label-itens-compra'>Nome do Fornecedor</label>
                        <label className='label-itens-compra'>Nome do Produto</label>
                        <label className='label-itens-compra'>Valor total</label>
                        <label className='label-itens-compra'>Contato</label>
                        
                    </div>

                    <div className='inputs-form-compra'>
                              <input className='input-itens-compra'/>
                              <input className='input-itens-compra'/>
                              <input className='input-itens-compra'/>
                              <input className='input-itens-compra'/>
                    </div>

     </div>
                      
                      <div className='form-pai-pagamento'>
                            <label className='label-itens-compra'>Forma de Pagamento</label>
                            <select className='select-compra'>
                                    <option value="">  </option>
                                    <option value="Avista">À vista</option>
                                    <option value="CartãodeDébito">Cartão de Débito</option>
                                    <option selected value="CartãodeCrédito">Cartão de Crédito</option>
                                    <option value="pix">Pix</option>
                            </select>
                            <label className='label-itens-compra' >Prazo de Pagamento</label>
                          <input type='date' className='input-itens-compra'/>
                      </div>

                      <div className='grid-paga'>
                           <label className='label-itens-compra' >Forma de entrega</label>
                            <select className='select-compra'> 
                                    <option value="">    </option>
                                    <option value="">Entrega por conta da empresa</option>
                                    <option value="">Entrega por conta própria</option> 
                            </select>

                            <label className='label-itens-compra' >Prazo de entrega</label>
                            <input type='date' className='input-itens-compra'/>
                      </div>
                          <button className='botao-form'>Comprar</button>
                      
   </form>
   <div></div>
   </div>

  )
}

export default FormularioCompra