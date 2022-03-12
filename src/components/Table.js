import React, {useEffect, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import axios from 'axios';

function Deliverylist(props){
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        fetchDelivery(props)
    }, [])  

    const fetchDelivery = (props) => {
        axios.get('http://localhost:8787/confirmations/'+props.name)
        .then(response => setDeliveries(response.data))
        .catch(err => console.error(err))
    };

    const columns = [
        {headerName: 'Universally Unique Identifier', field: 'uuid', sortable: true, filter: true, width: 250},
        {headerName: 'Date and Time of Delivery', field: 'pickup_time',sortable: true, filter: true, width: 250},        
    ]

    return(

        <div className="ag-theme-material" 
        style={{height: 800, width: '90%', margin : 'auto'}}>
           <AgGridReact
               rowData={deliveries}
               columnDefs={columns}
                pagination= {true}
                paginationPageSize = {10}
                suppressCellSelection={true}
                >
           </AgGridReact>
        </div>
    )
}

export default Deliverylist;