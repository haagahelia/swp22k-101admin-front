import { useState, useEffect } from 'react'
import DeliveryList from './components/Table'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const App = () => {

  return (
  
    <div className="ag-theme-alpine-dark" style={{ height: '100%', width: '100%', margin : 'auto', backgroundColor: '#161517'}}>
         <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
              Wolt Deliveries
          </Typography>
        </Toolbar>
      </AppBar>
      <DeliveryList />

    </div>

  )
}

export default App


   //   {end !== 'all' && <DeliveryList name={end} />}
    //  {end === 'all' && <DeliveryList name={end} />}