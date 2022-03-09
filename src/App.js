import { useState, useEffect } from 'react'
import Delivery from './components/deliveries'
import confirmations from './services/confirmations'

const App = () => {
  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    confirmations
      .data()
      .then(confirmations => {
        setDeliveries(confirmations)
      })
  }, [])

  return (
  
    <div>
      <h1>Delivery Confirmations</h1>
      <ul>
        {deliveries.map(delivery => 
          <Delivery
            key={delivery.uuid}
            delivery={"UUID: " + delivery.uuid + " Pick up time: " + delivery.pickup_time}
          />
        )}
      </ul>
    </div>
  )
}

export default App