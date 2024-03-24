import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavWeather from "./components/NavWeather";
// import FooterWeather from "./components/FooterWeather";
import Hero from "./components/Hero";
import MeteoFetch from "./components/MeteoFetch";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchLocalit from "./components/SearchLocalit";
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <NavWeather />
        <Hero />
        <Container>
        <SearchLocalit />
        {/* <Routes> */}
          {/* <Route path="/search:locationID" element={<MeteoFetch />}></Route> */}
          <MeteoFetch />
          </Container>
         {/* </Routes> */}
        {/* <FooterWeather /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
