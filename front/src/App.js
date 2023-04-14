import { BrowserRouter as Roter, Routes, Route} from 'react-router-dom'; 
import Home from './pages/Home/home'
import Clientes from './pages/Clientes/Clientes'
import Estoque from './pages/Estoque/Estoque';
import Fornecedores from './pages/Fornecedores/Fornecedores';
import Produtos from './pages/Produtos/Produtos';
import Relatorios from './pages/Relatorios/Relatorios';
import FormLoja from './pages/TelaFormLoja/FormLoja';
import FormCompra from './pages/TelaFormCompra/FormCompra';
import FormularioVenda from './pages/TelaFormVenda/FormularioVenda';
import FormularioCliente from './pages/TelaFormCliente/FormularioCliente';
import Login from './components/Login/Login';
import TelaCadastro from './pages/TelaCadastro/TelaCadastro';



function App() {
  return (
    <Roter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/cadastro' element={<TelaCadastro/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/estoque" element={<Estoque/>}/>
        <Route path="/fornecedores" element={<Fornecedores/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/relatorios" element={<Relatorios/>}/>
        <Route path='/formloja' element={<FormLoja/>}/>
        <Route path='/formcompra' element={<FormCompra/>}/>
        <Route path='/formvenda' element={<FormularioVenda/>}/>
        <Route path='/formulariocliente' element={<FormularioCliente/>}/>
      </Routes>
    </Roter>
  );
}

export default App;
