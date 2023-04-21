import React, {useEffect, useState} from "react";
import Table from '../TabelaGenerica/Table.jsx';
import api from '../../api.js'

function Index(){
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        async function getProviders(){
            const {data} = await api.get('/provider')
            setProviders(data)
        }
        getProviders()
    }, [providers])
    
    return(
        <Table data={providers} />
    );
}

export default Index;