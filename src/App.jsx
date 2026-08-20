import { useState } from 'react'
import './App.css'

function App() {
  const API_KEY=import.meta.env.VITE_API_TOKEN
  console.log(API_KEY)
  const [count, setCount] = useState(0)
  const [cityName, setCityName] = useState('')
  const [apiData, setApiData] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
  const getData = () => {
    fetch(url).then((responce) => {
      if (responce.status != 200) {
        if (responce.status == 404) {
          alert('We have no record for this CITY!')
          return
        }
        alert('No Data Found Please Try Later!')
        throw new Error(`HTTP Error: ${responce.status}`);
      }

      return responce.json()
    }).then((data) => {
      setApiData({
        name: data.name,
        temp: data.main.temp,
        country: data.sys.country,
        icon: data.weather[0].icon
      })

    }).catch((err) => {
      console.log(err)
    })
  }
  console.log(apiData)
  return (
    <>
      <div className="container">
        <h1>Open Weather App</h1>
        <p>City Name</p>
        <input type="text" value={cityName} placeholder='search city' onChange={(i) => setCityName(i.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter" && cityName.length > 2) {
            getData();
          }
        }} />
        <br />
        <button onClick={getData} style={{
          width: "100%",
          padding: "14px",
          background: cityName.length > 2 ? "#667eea" : "#88898b",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "17px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s"
        }} disabled={cityName.length > 2 ? false : true} >Get Data</button>
      </div>
      <div className="container">

        <div className="showResult">
          <label htmlFor="">City Name</label>
          <label htmlFor="">Country Name</label>
          <label htmlFor="">Temperature</label>
        </div>
        <div className="showResult">
          <label htmlFor="">{apiData?.name}</label>
          <label htmlFor="">{apiData?.country}</label>
          <label htmlFor="">
            {apiData && Math.round(apiData.temp - 273.15) + "°C"}

            {apiData?.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${apiData.icon}@2x.png`}
                alt="Weather"
                style={{
                  width: "30px",
                  display: "inline",
                  verticalAlign: "middle",
                  marginLeft: "5px"
                }}
              />
            )}
          </label>
        </div>
      </div>
    </>
  )
}

export default App
