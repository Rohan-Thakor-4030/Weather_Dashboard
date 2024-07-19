import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infobox.css";

export default function Infobx({info}){

    const  INT_IMG = "https://images.unsplash.com/photo-1561485039-765c8e81686d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_IMG = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D ";
    const RAIN_IMG = "https://images.unsplash.com/photo-1593981211728-41e4e796ec96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_IMG = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return(
        <div className="infobox">
            <div className='card-container'>
             <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image=  {info.humidity > 80 ? RAIN_IMG : info.temp > 15 ? HOT_IMG : COLD_IMG}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.City_Name}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature : {info.temp}&deg;C</p>
                <p>Feels_Like : {info.feelslike}&deg;C</p>
                <p>Temp_Max : {info.temp_max}&deg;C</p>
                <p>Temp_Min : {info.temp_min}&deg;C</p>
                <p>Humidity : {info.humidity}&deg;C</p>
                <p>Weather :<b> {info.weather}</b></p>
                <p>The {info.City_Name}  have Latitude is {info.latitude}&deg; and  Longitude is {info.longitude}&deg; . </p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}