import React from 'react'
import LogoVenda from '../../assets/LogoVenda.PNG'
import MenuLateral from '../MenuLateral/MenuLateral'
import '../FormularioVenda/FormVenda.css'

function FormVenda() {
  return (

<div className='container-vendas'>
    <MenuLateral/>
<form className='form-venda'>

        <div className='pai-titulo-form-venda'>
            <img src={LogoVenda} className='logovenda'/>
            <h1 className='titulo-form-venda'>Formulário de Venda</h1>
        </div>

<div className='pai-form-venda'>

            <div className='pai-campo-label'>
                <label className='label-itens-venda'>Cód Produto</label>
                <label className='label-itens-venda'>Nome Produto</label>
                <label className='label-itens-venda'>Valor UNT Produto</label>
                <label className='label-itens-venda'>Valor Total</label>
                <label className='label-itens-venda'>Total de Produtos</label>

            </div>

             <div className='pai-campo-inputs'>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>

                     
            </div>
            <button className='botao'>Adicionar Produto</button>

            <div className='pai-campo-label'>
                <label className='label-itens-venda'>Cód Cliente</label>
                <label className='label-itens-venda'>Nome Cliente</label>
                <label className='label-itens-venda'>Telefone</label>
                <label className='label-itens-venda'>E-mail</label>
                <label className='label-itens-venda'>CEP</label>

            </div>

            <div className='pai-campo-inputs'>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>
                <input className='input-itens-venda'/>

            </div>
    </div>

     

    <div className='div-pagamento'>    
        <label className='label-itens-venda'>Forma de Pagamento</label>

            <select className='select-venda'>
                    <option value="">    </option>
                    <option value="Avista">À vista</option>
                    <option value="CartãodeDébito">Cartão de Débito</option>
                    <option selected value="CartãodeCrédito">Cartão de Crédito</option>
                    <option value="pix">Pix</option>
            </select>
            <label className='label-itens-venda'>Prazo de Pagamento</label>
             <input type='date' className='input-itens-venda'/>
    </div>

        <div className='div-pagamento'>
            <label className='label-itens-venda'>Forma de entrega</label>
            <select className='select-venda'>
                    <option value="">    </option>
                    <option value="">Entrega por conta da empresa</option>
                    <option value="">Entrega por conta própria</option>
                    
             </select>
            <label className='label-itens-venda'>Prazo de entrega</label>
            <input type='datetime-local' className='input-itens-venda'/>
        </div>
                      
        <div className='botao-forma-pagamento'>
            <button className='botao-vender'>Vender</button>
        </div>

</form>
<div></div> 
</div>
  )
}

export default FormVenda