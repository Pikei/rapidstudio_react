import React, {useEffect, useState} from 'react';

const JobOffers = () => {
    const [backendData, setBackendData] = useState([])

    useEffect (() => {
    fetch('/getJobs')
    .then(response => response.json())
    .then(backendData => setBackendData(backendData))

  }, [])

  return(
    <table>
        <tbody>
        {backendData.map((d,i) => (
            <tr key = {i}><td>
                <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" target = "_blank" rel="noreferrer">
                {d.poziom} {d.nazwa} | {d.lokalizacja}</a>
            </td></tr>
        ))}
        </tbody>
      </table>
  )
}

export default JobOffers