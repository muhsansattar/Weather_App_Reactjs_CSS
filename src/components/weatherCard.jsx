import React from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiSunset, WiHumidity, WiStrongWind} from 'react-icons/wi';
const WeatherCard=({tempInfo})=>{
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      }=tempInfo
    //   here i am gonna converting sunset time into original time format of hours and minutes
    let sec=sunset;
    let date=new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return(
        <>
         <article className="widget">
                <div className="weather-icon">
                    <WiDaySunny size={50} color="orange" />
                    <WiCloud size={50} color="gray" />
                    <WiRain size={50} color="blue" />
                    <WiSnow size={50} color="skyblue" />
                </div>
                <div className="weather-info">
                    <div className="temprature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                            <div className="weather-condition">{weathermood}</div>
                            <div className="place">{name},{country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* here i am gonna making 4 column secction */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <WiSunset size={50} color="skyblue"/>
                            </p>
                            <p className="extra-info-leftside">
                            {timeStr} <br/>
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <WiHumidity size={50} color="skyblue"/>
                            </p>
                            <p className="extra-info-leftside">
                            {humidity}<br/>
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                    <div className="two-sided-section">
                            <p>
                                <WiRain size={50} color="skyblue"/>
                            </p>
                            <p className="extra-info-leftside">
                            {pressure}<br/>
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <WiStrongWind size={50} color="skyblue"/>
                            </p>
                            <p className="extra-info-leftside">
                            {speed} <br/>
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default WeatherCard;