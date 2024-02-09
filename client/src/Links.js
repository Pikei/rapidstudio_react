import React, {useEffect, useState} from 'react';

const Links = () => {

const [backendData, setBackendData] = useState([])
    useEffect (() => {
    fetch('/getMedia')
    .then(response => response.json())
    .then(backendData => setBackendData(backendData))

  }, [])

  return(
    <div id="left">
        <h1>Znajdź nas na</h1>
        {backendData.map((d,i) => (
            <p key = {i}>
                <a href = {d.link} target = "_blank" rel="noreferrer"> {d.nazwa}</a>
            </p>
        ))}
    </div>
  )
}
export default Links;