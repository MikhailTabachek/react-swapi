import { useState } from 'react';
import {Route, Routes} from "react-router-dom"

import './App.css';
import ShipList from './ShipList/ShipList';
import ShipDetails from './ShipDetails/ShipDetails';

function App() {
  // const [navItems, setNavItems] =useState ([

  // ])
  return (
    <>
      <nav>Starwars Starships</nav>
      <Routes>
        <Route path="/" element={<ShipList/>}/>
        <Route path="/ship" element={<ShipDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
