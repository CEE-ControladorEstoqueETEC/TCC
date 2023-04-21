import React, {useEffect, useState} from "react";
import Table from '../TabelaGenerica/Table.jsx';
import api from '../../api.js'

function Index(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function getCustomer(){
            const {data} = await api.get('/customer')
            setCustomers(data)
        }
        getCustomer()
    }, [customers])
    return(
        <Table data={customers} />
    );
}

export default Index;