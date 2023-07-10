import React from 'react'
import {useQuery,} from '@tanstack/react-query'
import Axios from 'axios';
import { useState,createContext } from 'react';
import '../style/Input.css'
import Output from  './Output';
import Sunny from '../images/sunnyday.jpg'
import Clouds from '../images/cloudyday.jpg'
import Rain from '../images/a whimsical fantasy earthworm.jpg'
import Snow from '../images/Tree covered in snow.jpg'
import Wind from '../images/windy day.jpg'
import defau from '../images/default.jpg'
import {FiSearch,FiLoader} from "react-icons/fi"




  //create contest created 
  export const AppContext = createContext();

const Input = () => {
  // api key
  const apiKey = "622e622d3d05180937c17f5456a8aef8"
  // fetching the data from api 
  
  const {data,refetch,isError,isLoading,} = useQuery(['whea'], async()=>{
    return Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((res)=> res.data)
  })

  const  [city,setCity]= useState("Nepal")
  const weatherimg = {
    Clear: Sunny,
    Clouds: Clouds,
    Rain: Rain,
    Snow: Snow,
    Wind: Wind,
    default: defau,
  }

  const handlekeypress = (e)=>{
    if(e.key == 'Enter'){    
      refetch();
      
      if(isError){
        alert("error occured try again with correct spelling")
    }
    }
    
  }


  return (  
    <div className='background-img'>

    <img src={weatherimg[data?.weather[0]?.main] || weatherimg.default} alt="" />
      <div className='inSec'>
        <div className='innerDiv'>
          <div className='innerDiv-h1'>

          <h1>Welcome to Wheater App</h1>
          </div>
          <div className='innerDiv-input'>
          <input type="text" placeholder='Nepal' onChange={(e)=>setCity(e.target.value)} onKeyDown={(e)=>{handlekeypress(e)}}/>

          <button onClick={refetch} ><FiSearch> </FiSearch></button>
          </div>
        </div>
        
        <div className='output-div'>
          {
            isLoading? (<h1 style={{fontSize:"3rem",color:"white",zIndex:"2",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><FiLoader></FiLoader></h1>):(<Output data={data}></Output>)
          }
        </div>
      </div>
    </div>  
  )
}

export default Input