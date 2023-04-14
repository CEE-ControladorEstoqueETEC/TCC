import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'
import Logo from '../../assets/logo.PNG'

export default function Header() {
  return (
    
        <header className='header-principal-pai'>
           <Link to="/"> <img src={Logo} className='header_logo'></img></Link>
            <nav className='header-naveg-filho'>
                  <a className='header_items_menu'><Link to="/clientes">CLIENTES</Link></a>
                  <a className='header_items_menu'><Link to="/fornecedores">FORNECEDORES</Link></a>
                  <a className='header_items_menu'><Link to="/produtos">PRODUTOS</Link></a>
                  <a className='header_items_menu'><Link to="/estoque">ESTOQUE</Link></a>
                  <a className='header_items_menu'><Link to="/relatorios">RELATÓRIOS</Link></a>
            </nav>
            
        </header>

        

  )
}
