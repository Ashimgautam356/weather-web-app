import React from 'react'
import '../style/Output.css'
import {FiCloudRain,FiCloudSnow,FiCloud,FiMapPin,FiSun,FiSunrise,FiSunset,FiThermometer,FiUmbrella} from "react-icons/fi"
const Output = (prop) => {
  // const {data}= useContext(AppContext)
  
  // rain percentage 
  const rainper = ((prop.data?.rain && prop.data?.rain["1h"])? Math.floor((prop.data?.rain["1h"])*100):0);
  // sun rise
  const sunrisetimestamp = prop.data?.sys?.sunrise;
  const sunsettimestamp = prop.data?.sys?.sunset;

  // converting timestamp into date obj
  const sunrise = new Date(sunrisetimestamp * 1000);
  const sunset = new Date(sunsettimestamp * 1000);
  // formate
  const sunriseTime =  sunrise?.toLocaleTimeString([], { timeStyle: 'short' });
  const sunsetTime =  sunset?.toLocaleTimeString([], { timeStyle: 'short' });
  return (
    <div className='outerdiv'>
      <div className="container">
      <h1><FiMapPin/> {prop.data?.name}</h1>

      </div>
      <div className="container">
      <h1>{prop.data?.weather[0].description}</h1>

      </div>
      <div className="container">
      <h1><FiThermometer></FiThermometer>  {(prop.data?.main.temp - 273.15).toFixed(2)} &#8451;</h1> 

      </div>
      <div className="container">
      <h1><FiCloudRain></FiCloudRain> {rainper}%</h1>

      </div>
      <div className="container">
      <h1><FiSunrise></FiSunrise>: {sunriseTime}</h1>

      </div>
      <div className="container">
      <h1> <FiSunset></FiSunset> : {sunsetTime}</h1>

      </div>
      
    </div>
    
  )
}

export default Output