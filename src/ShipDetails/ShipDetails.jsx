import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getDetails } from '../services/api-calls'
import PilotList from '../PilotList/PilotList'
import getPilots from '../PilotList/PilotList'


const ShipDetails = (props) => {

  let location = useLocation()
  let shipDetails = location.state.shipName
  // const pilotUrls = location.state.shipName.pilots

  return ( 
    <>
    <div className='ship'>
      <h4>Ship Details!</h4>
      <div className='ship-details'>
      {shipDetails.name ? 
      <div>
        <div className='text'>Name:<br></br> {shipDetails.name}</div>
        <div className='text'>Model: <br></br> {shipDetails.model}</div>
        {/* <div className='text'>Pilots: <br></br> {shipDetails.pilots}</div>
        <div className='text'>
          {getPilots}
        <PilotList/>
        </div> */}
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