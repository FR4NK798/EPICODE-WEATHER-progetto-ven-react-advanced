import Card from "react-bootstrap/Card";
import { Component } from "react";
import { useState, useEffect } from "react";

class Weather extends Component {
  state = {
    // weatherAdv : '',
    locationID: "Senise",
    weatherData: "",
    weatherDataFiveDays: "",
  };

  render() {
    const gradi = Math.ceil(this.props.data.main.temp - 273);
    return (
      <>
        {/* <Card className="position-relative weather-position"> */}
        <Card>
          {/* <Card.Img
              variant="top"
            //   src={this.state.movieData.Poster}
              alt="movie poster"
            /> */}
          <Card.Body>
            {console.log("dati da ricerca", this.props.data)}
            {/* PAESE */}
            {/* <Card.Title>{this.state.dati.name}</Card.Title> */}
            <Card.Title>{this.props.data.name}</Card.Title>
            {/* TEMPERATURA */}
            <Card.Text>
              {/* <Card.Title>{this.state.dati.main.temp}</Card.Title> */}
              <Card.Title>{gradi} &#176;</Card.Title>
              {console.log("icona", this.props.data.weather[0].icon)}
              {this.props.data.weather[0].icon === "11d" && (
                <img src="https://openweathermap.org/img/wn/11d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "09d" && (
                <img src="https://openweathermap.org/img/wn/09d@2x.png" alt=''></img>
              )}
               {this.props.data.weather[0].icon === "10d" && (
                <img src="https://openweathermap.org/img/wn/10d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "13d" && (
                <img src="https://openweathermap.org/img/wn/13d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "50d" && (
                <img src="https://openweathermap.org/img/wn/50d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "01d" && (
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "01n" && (
                <img src="https://openweathermap.org/img/wn/01n@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "02d" && (
                <img src="https://openweathermap.org/img/wn/02d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "02n" && (
                <img src="https://openweathermap.org/img/wn/02n@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "03d" && (
                <img src="https://openweathermap.org/img/wn/03d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "03n" && (
                <img src="https://openweathermap.org/img/wn/03n@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "04d" && (
                <img src="https://openweathermap.org/img/wn/04d@2x.png" alt=''></img>
              )}
              {this.props.data.weather[0].icon === "04n" && (
                <img src="https://openweathermap.org/img/wn/04n@2x.png" alt=''></img>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Weather;
