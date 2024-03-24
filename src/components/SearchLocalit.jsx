import { Component } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Weather from "./Weather";
import WeatherDataFiveDays from "./WeatherFiveDays";

import { useState, useEffect } from "react";

class SearchLocalit extends Component {
  //     const [weatherAdv, setWeatherAdv] = useState('')
  //   const [locationID, setLocationID] = useState(initialLoc);

  state = {
    // weatherAdv : '',
    locationID: "",
    weatherData: "",
    weatherDataFiveDays: "",
  };

  fetchWeatherWithLocAutorization = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8d3bae94456e6a1dbe66ca4b6182e29e`;

        fetch(url)
          .then((response) => {
            // console.log("response", response);
            // console.log("url fetch", url);
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Problema nella chiamata API");
            }
          })
          .then((data) => {
            console.log("dati da fetch", data);

            this.setState({
              weatherData: data,
            });
            // setIsLoading(false)
            // METTERE LOADING
          })
          .catch((error) => {
            console.log("ERRORE", error);
            // setIsLoading(false)
            // setIsError(true)
          });
      });
    }
  };
  fetchWeatherWithLocAutorizationFiveDays = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=8d3bae94456e6a1dbe66ca4b6182e29e`;

        fetch(url)
          .then((response) => {
            // console.log("response", response);
            // console.log("url fetch five days", url);
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Problema nella chiamata API");
            }
          })
          .then((data) => {
            console.log("dati da fetch five days", data);

            // COME SI SALVA STATO
            this.setState({
              weatherDataFiveDays: data.list,
            });
            // setIsLoading(false)
            // METTERE LOADING
          })
          .catch((error) => {
            console.log("ERRORE", error);
            // setIsLoading(false)
            // setIsError(true)
          });
      });
    }
  };
  fetchWeatherWithNoAutorization = () => {
    // console.log("fetch con select");
    // console.log("state location id", this.state.locationID);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.locationID}&appid=8d3bae94456e6a1dbe66ca4b6182e29e`;
    fetch(url)
      .then((response) => {
        // console.log("response", response);
        // console.log(
        //   "url fetch con location inserita manualmente da select",
        //   url
        // );
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((data) => {
        console.log("dati da fetch", data);
        // qua tra poco le salveremo anche nello state...

        // COME SI SALVA STATO
        this.setState({
          weatherData: data,
        });
        // setIsLoading(false)
        // METTERE LOADING
      })
      .catch((error) => {
        console.log("ERRORE", error);
        // setIsLoading(false)
        // setIsError(true)
      });
  };
  fetchWeatherWithNoAutorizationFiveDays = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    // const long = position.coords.longitude;
    // const lat = position.coords.latitude;
    // api.openeathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.locationID}&appid=8d3bae94456e6a1dbe66ca4b6182e29e`;

    fetch(url)
      .then((response) => {
        // console.log("response", response);
        // console.log("url fetch five days", url);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((data) => {
        console.log("dati da fetch five days", data);

        // COME SI SALVA STATO
        this.setState({
          weatherDataFiveDays: data.list,
        });
        // setIsLoading(false)
        // METTERE LOADING
      })
      .catch((error) => {
        console.log("ERRORE", error);
        // setIsLoading(false)
        // setIsError(true)
      });
    //   });
    // }
  };

  componentDidMount() {
    this.fetchWeatherWithLocAutorization();
    this.fetchWeatherWithLocAutorizationFiveDays();
    console.log("component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.locationID !== this.state.locationID) {
      // ...solo quando c'è stato un cambio della prop movieTitle
      this.fetchWeatherWithNoAutorization();
      this.fetchWeatherWithNoAutorizationFiveDays();
    }
  }

  render() {
    return (
      <>
        <Form>
          {/* <Form.Group className="my-3 position-absolute"> */}
          <Form.Group>
            <Form.Label id="select-label">Scegli una località</Form.Label>
            <Form.Select
              onChange={(e) => {
                // cambio lo stato ogni volta che scelgo un nuovo film
                this.setState({
                  locationID: e.target.value,
                });
              }}
              // seconda mandata: il valore di questa select sarà indissolubilmente collegato allo stato
              value={this.state.locationID}
            >
              <option>Chiaromonte</option>
              <option>Senise</option>
              <option>Francavilla in Sinni</option>
              <option>Potenza</option>
              <option>Roma</option>
              <option>Torino</option>
              <option>Milano</option>
              <option>Londra</option>
            </Form.Select>
          </Form.Group>
        </Form>
        {/* <Row className="justify-content-center"> */}
        {/* <Col xs={12} md={4} lg={2}> */}

        {/* <Weather data={this.state.weatherData}/> */}
        {/* {
          console.log(
            "stato e 5days",
            this.state.weatherData,
            this.state.weatherDataFiveDays
          )
          // console.log("stato five days",this.state.weatherDataFiveDays )
        } */}
        {this.state.weatherData && <Weather data={this.state.weatherData} />}
        {<WeatherDataFiveDays data={this.state.weatherDataFiveDays} />}
        {/* </Col> */}
        {/* </Row> */}
      </>
    );
  }
}
export default SearchLocalit;
