import React, {useEffect, useState} from 'react';

const Locations = () => {

const [backendData, setBackendData] = useState([])

    useEffect (() => {
    fetch('/getLocations')
    .then(response => response.json())
    .then(backendData => setBackendData(backendData))

  }, [])

  return(
    <div id="right">
        <h1>Lokalizacje</h1>
        {backendData.map((d,i) => (
            <p key = {i}>{d.miasto}<br />{d.adres}<br />{d.kodPocztowy} {d.miasto}</p>
        ))}
    </div>
  )
}
export default Locations;