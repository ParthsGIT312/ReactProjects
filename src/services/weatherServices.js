// const API_KEY = "4e56619d2946628ae64f926384404fed";
// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
}

export default getWeatherData;