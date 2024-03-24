import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavWeather from "./components/NavWeather";
// import FooterWeather from "./components/FooterWeather";
import Hero from "./components/Hero";
import MeteoFetch from "./components/MeteoFetch";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchLocalit from "./components/SearchLocalit";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <NavWeather />
        <Hero />
        <SearchLocalit />
        {/* <Routes> */}
          {/* <Route path="/search:locationID" element={<MeteoFetch />}></Route> */}
          <MeteoFetch />
         {/* </Routes> */}
        {/* <FooterWeather /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
