import React, {useEffect, useState} from "react";
import Table from '../TabelaGenerica/Table.jsx';
import api from '../../api.js'

function Index(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getUser(){
            const {data} = await api.get('/user')
            setUser(data)
        }
        getUser()
    }, [user]);
    
    return(
        <Table data={user} />
    );
}

export default Index;