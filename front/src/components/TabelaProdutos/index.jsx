import React, {useEffect, useState} from "react";
import Table from '../TabelaGenerica/Table.jsx';
import api from '../../api.js'

function Index(){
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function getProduct(){
            const {data} = await api.get('/product')
            setProduct(data)
        }
        getProduct()
    }, [product]);
    
    return(
        <Table data={product} />
    );
}

export default Index;