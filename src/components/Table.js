import React, {useEffect, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import axios from 'axios';
import dayjs from 'dayjs';

function Deliverylist(){

  const [end, setEnd] = useState('all');
  const [uuid, setUuid] = useState('');

  function handleChange(e, value){

    setEnd(value);

  }

    const [deliveries, setDeliveries] = useState([]);
 
    useEffect(() => {
        fetchDelivery()
    }, []) 


    const fetchDelivery = () => {
        axios.get('http://localhost:8787/confirmations/'+end)
        .then(response => setDeliveries(response.data))
        .then(console.log(deliveries))
        .catch(err => console.error(err))
    };

    const columns = [
        {headerName: 'Universally Unique Identifier', field: 'uuid', sortable: true, filter: true, width: 250},
        {
            headerName: 'Date and Time of Delivery', valueGetter: ({ data }) => {
                return (dayjs(data.pickup_time).format('DD/MM/YYYY h:mm a'))
            }, sortable: true, filter: true, width: 250
        },     
    ]

    return(

        <div className="ag-theme-alpine-dark" 
        style={{height: 800, width: '90%', margin : 'auto', backgroundColor: '#161517'}}>
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