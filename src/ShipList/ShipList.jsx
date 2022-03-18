import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShipList } from "../services/api-calls";

const ShipList = (props) => {
  const [ships, setShips] = useState([])

  useEffect(()=> {
    getShipList()
    .then(shipData => setShips(shipData.results))
  }, [])

  return ( 
    <>
    <div>
      <h4>This is a list of all ships!</h4>
      <div className="icon-container">
        {ships.map((shipName) =>(
          <Link id="ship-link" to='/ship' state={{shipName}} key={shipName.name}>
          <div id="classDiv" >
            {shipName.name}
          </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default ShipList;