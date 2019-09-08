import React from 'react'


const Result = props => {

  const {err, city, date, sunrise, sunset, temp, pressure, wind} = props.weather

  let content = null

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    const tempC = Math.round(temp -273.15)
    content =(
      <div>
        <h1> Weather in {city}: </h1>
      <hr />
    <div className="res"><strong>Date </strong>{date}</div>
        <div className="res"><strong>Sunrise: </strong>{sunriseTime}</div>
        <div className="res"><strong>Sunset:</strong> {sunsetTime}</div>
        <div className="res"><strong>Temperature: </strong>{tempC}&#176;C</div>
        <div className="res"><strong>Pressure:</strong> {pressure}hPa</div>
        <div className="res"><strong>Wind: </strong>{wind}m/s</div>
      </div>
    )
  }


  return (

    <div className="result">
      {err ? `we don't have ${city} in the database` : content}
    </div>


  )

}



export default Result
