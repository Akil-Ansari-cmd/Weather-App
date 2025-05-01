import axios from "axios";


export const WeatherApi = async (location) => {
  console.log("Request location:", location);
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9c90da5087f4114a0dd833caa9d2ccfa&units=metric`, 
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; 
  } catch (e) {
    console.error("Error fetching weather data", e); 
    return null; 
  }
};
