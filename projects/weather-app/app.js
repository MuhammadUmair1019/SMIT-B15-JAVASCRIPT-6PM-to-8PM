const API_KEY = "xSeclMRbo43DGmbB9YxEPIAWrV4DNf8J";

const getCity = async (city) => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?q=${city}&apikey=${API_KEY}`;
  const cityApi = `${baseURL}/${query}`;
  const response = await fetch(cityApi);
  const data = await response.json();

  return data[0];
};


const getWeather = async () => {
    const cityData = await getCity('karachi')
    console.log(cityData)

    const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${API_KEY}`)
    const weatherData = await weatherResponse.json()

    console.log(weatherData)

}

getWeather()
