import { useState, useEffect } from 'react'
import DeliveryList from './components/Table'

const App = () => {

  const [end, setEnd] = useState('all');
  const [uuid, setUuid] = useState('');

  function handleChange(e, value){

    setEnd(value);

  }

  return (
  
    <div>
      <h1>Delivery Confirmations</h1>  
      <button onClick={(e) => handleChange(e, 'all')}>Show all deliveries</button><br />
      <input value={uuid} onChange={event => setUuid(event.target.value)} />
      <button onClick={(e) => handleChange(e, uuid)}>Find delivery by UUID</button>
      {end !== 'all' && <DeliveryList name={end} />}
      {end === 'all' && <DeliveryList name={end} />}
    </div>

  )
}

export default App