import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getDetails } from '../services/api-calls'


const ShipDetails = (props) => {
  // const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()
  let shipDetails = location.state.shipName

  // useEffect(()=> {
  //   getDetails(location.state)
  //   .then(shipDetails => setShipDetails(shipDetails))
  // }, [])


  return ( 
    <>
    <div className='ship'>
      <h4>Ship Details!</h4>
      <div className='ship-details'>
      {shipDetails.name ? 
      <div>
        <div className='text'>Name:<br></br> {shipDetails.name}</div>
        <div className='text'>Model: <br></br> {shipDetails.model}</div>
        <Link id="link" to='/'>Return</Link> 
      </div>
      :
      <div>Loading ...</div>
      }
      </div>
    </div>
    </>
  );
}

export default ShipDetails;