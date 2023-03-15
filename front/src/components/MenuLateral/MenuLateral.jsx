import React from 'react'
import '../MenuLateral/MenuLateral.css'
import CarroCompras from '../../assets/carrinhoCompras.PNG';
import Compras from '../../assets/compras.PNG';
import RegistroLoja from '../../assets/registroLoja.PNG';
import { Link } from 'react-router-dom';

function MenuLateral() {
  return (
            <div className='menulateral-cont'>

                        <div className='menulateral-itens'>
                                <Link to='/formvenda'>
                                  <img src={CarroCompras} className='menu-lateral-itens'>
                                </img>
                                </Link>
                                 <Link to='/formcompra'>
                                  <img src={Compras} className='menu-lateral-itens'></img>
                                 </Link>
                                 <Link to='/formloja'> 
                                 <img src={RegistroLoja} className='menu-lateral-itens'></img>
                                 </Link>
                        </div>
            </div>
              )
}

export default MenuLateral