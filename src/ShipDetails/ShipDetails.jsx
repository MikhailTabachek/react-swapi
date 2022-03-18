import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getDetails } from '../services/api-calls'
import getPilots from '../PilotList/PilotList'


const ShipDetails = () => {
  const [names, setNames] = useState([])
  let location = useLocation()
  let shipDetails = location.state.shipName
  const pilotUrls = location.state.shipName.pilots

  useEffect(() => {
    const retreive = async() => {
      const pilots = await getPilots(pilotUrls)
      setNames(pilots)
    }
    retreive()
  },[pilotUrls])

  return ( 
    <>
    <div className='ship'>
      <h4>Ship Details!</h4>
      <div className='ship-details'>
      {shipDetails.name ? 
      <div>
        <div className='text'>Name:<br></br> {shipDetails.name}</div>
        <div className='text'>Model: <br></br> {shipDetails.model}</div>
        {pilotUrls.length ?
          <div className='text'>
            {names.map(pilotName => {
              return <div>{pilotName}</div>
            })}
          </div> : 
          <div className='text'>No Pilots</div>}
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