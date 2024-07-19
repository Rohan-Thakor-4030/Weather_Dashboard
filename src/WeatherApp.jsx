import { useState } from "react";
import Infobx from "./Infobox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){

    const [weatherinfo , setWeatherinfo] = useState({
        City_Name : "surat ",
        feelslike : 39.06 ,
        humidity : 52 ,
        latitude : 21.16 ,
        longitude : 72.83 ,
        temp : 33.99 ,
        temp_min : 33.99 ,
        temp_max : 33.99 ,
        weather : "few clouds" 
      });
    
      let updateInfo = (newInfo) =>{
        setWeatherinfo(newInfo);
      }

    return(
        <div style={{textAlign : 'center'}}>
            <h2>Weather App</h2>
            <SearchBox  updateInfo = {updateInfo}/>
            <Infobx info = {weatherinfo}/>
        </div>
    );
}