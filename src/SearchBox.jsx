import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';


export default  function SearchBox({updateInfo}){
    let [city ,setCity] = useState(" ");
    let [error ,setError] = useState(false);
    const API_URL =   "https://api.openweathermap.org/data/2.5/weather?q=";;
    const API_KEY = "eda00f711649ba89888c6310f33c0fee" ;

    let getinfo = async() =>{
        try{
            let responce = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`)
            let jsonresponce = await responce.json();

            let Result = {
                City_Name : city ,
                latitude : jsonresponce.coord.lat,
                longitude: jsonresponce.coord.lon,
                temp : jsonresponce.main.temp ,
                temp_min : jsonresponce.main.temp_min ,
                temp_max : jsonresponce.main.temp_max ,
                humidity : jsonresponce.main.humidity ,
                feelslike : jsonresponce.main.feels_like ,
                weather : jsonresponce.weather[0].description,
                wind_speed : jsonresponce.wind.speed
            };
            console.log(Result);
            return Result;
       }catch(err){
        throw err;
       }

    }

    let handlechange = (evt) => {
        setCity(evt.target.value);
    };

    let onsubmit =  async(evt) => {
      try{
            evt.preventDefault();
            console.log(city);
            setCity(" ");
        let newInfo =  await getinfo();
        updateInfo(newInfo);
        setError(false);
      }catch(err){
        setError(true);
       
      }

    };

    return(
        <div className='Searchbox'>
            <form onSubmit={onsubmit}>
                <TextField id="City" label="City Name" variant="outlined"  required value={city} onChange={handlechange}/>
                <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
                { error && <p style={{color : "red"}}><b>Not city found  in our API </b></p>}
                
            </form>
          

        </div>
    );
}