import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const MeteoFetch =()=>{
    const [weatherAdv, setWeatherAdv] = useState([])
  
    const params = useParams()
    console.log('PARAMS', params)
    const navigate = useNavigate()
    console.log('params locationID', params.locationID)

    
    // const url ='api.openweathermap.org/data/2.5/forecast?q='
    // const locationWeather = ''
    // const apiKey = '&appid=8d3bae94456e6a1dbe66ca4b6182e29e'
    // const urlFetchWeaterAdvanced = url + locationWeather + apiKey



    // const fetchWeather = () => {

    //     fetch(urlFetchWeaterAdvanced)
    //       .then((response) => {
    //         if (response.ok) {
   
    //           return response.json() 
    //         } else {
          
    //           throw new Error('Problema nella chiamata API')

    //         }
    //       })
    //       .then((weatherFromApi) => {
    //         console.log('weatherFromApi', weatherFromApi)
    //         // qua tra poco le salveremo anche nello state...
    //         setWeatherAdv(weatherFromApi)
    //         // setIsLoading(false)
    //         // METTERE LOADING
    //       })
    //       .catch((error) => {
    //         console.log('ERRORE', error)
    //         // setIsLoading(false)
    //         // setIsError(true)
    //       })
    //   }

    //   useEffect(() => {
    //     console.log('IO SONO COMPONENTDIDMOUNT')
    //     fetchWeather()
    //   }, [])

return(
    <>
        {

        }
    </>
)
}
export default MeteoFetch