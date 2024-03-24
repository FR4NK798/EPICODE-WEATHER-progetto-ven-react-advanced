import { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// data di oggi in formato come l'array
const event = new Date();
console.log("data", event);

const anno = event.getFullYear();
console.log("anno", anno);

const zero = "0";
const mese = zero.concat(event.getMonth() + 1);
console.log("mese", mese);

const giorno = event.getDate();
console.log("giorno", giorno);

const tratto = "-";
const dataCompleta = anno + tratto + mese + tratto + giorno;
console.log("data completa", dataCompleta);
// 2024-03-29

// data da array

class weatherDataFiveDays extends Component {
  state = {
    // dataProp :[],
    dataMap: [],
    altridays:[]
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('props',this.props.data[0])
    if (prevProps.data !== this.props.data) {
      this.setState({
        // dataProp : this.props.data[0],
        dataMap: this.props.data,
      });
    }
    //   const dataDaFetch = this.props.data[0].dt_txt.split(" ");
    //   console.log("data split", dataDaFetch);

    //   const datastring = dataDaFetch.slice(0, 1).toString();
    //   console.log("prima parte data", datastring);
    //   console.log("data attuale", dataCompleta);
    //   // separare e confrontare
    //   this.state.dataMap.map((giorno, i) => {
    //     const dataDaFetch = giorno.dt_txt.split(" ");
    //     // console.log('data da fetch', dataDaFetch)
    //     const datastring = dataDaFetch.slice(0, 1).toString();
    //     console.log("data estratta dentro map", datastring);
    //     console.log("data attuale dentro map", dataCompleta);
    //     const dataEstrattaSplit = datastring.split("-");
    //     const dataAttualeSplit = dataCompleta.split("-");
    //     console.log("data Estratta Split", dataEstrattaSplit);
    //     console.log("data Attuale Split", dataAttualeSplit);
    //     const annoEstratto = dataEstrattaSplit.slice(0, 1).toString();
    //     const meseEstratto = dataEstrattaSplit.slice(1, 2).toString();
    //     const giornostratto = dataEstrattaSplit.slice(2, 3).toString();
    //     console.log("annoEstratto", annoEstratto);
    //     console.log("meseEstratto", meseEstratto);
    //     console.log("giornostratto", giornostratto);
    //     const annoAttualeEstratto = dataAttualeSplit.slice(0, 1).toString();
    //     const meseAttualeEstratto = dataAttualeSplit.slice(1, 2).toString();
    //     const giornoAttualestratto = dataAttualeSplit.slice(2, 3).toString();
    //     console.log("annoAttualeEstratto", annoAttualeEstratto);
    //     console.log("meseAttualeEstratto", meseAttualeEstratto);
    //     console.log("giornoAttualestratto", giornoAttualestratto);
    //     console.log("giorno MAP", giorno);
    //     if (
    //       annoEstratto !== annoAttualeEstratto &&
    //       meseEstratto !== meseAttualeEstratto &&
    //       giornostratto !== giornoAttualestratto
    //     ) {
    //       console.log(
    //         "PROVA STATA ALTRO DAYYYYYY"
    //       );
    //       this.setState({
    //         // dataProp : this.props.data[0],
    //         altridays: this.props.data,
    //       });
    //     }
    //   });
    
  }

  render() {
    // const gradi = Math.ceil(this.props.data.main.temp - 273);

    return (
      <>
      <h1 className="position-absolute">Temperatura dei prossimi 4 giorni</h1>
        <Row xs={12} md={6} lg={2}>
        
            {

                
            this.state.dataMap.map((giorno, i) => {
              const gradi = Math.ceil(giorno.main.temp - 273);
              // return (
              // PROVA ====================

              const dataDaFetch = giorno.dt_txt.split(" ");
              // console.log('data da fetch', dataDaFetch)

              const datastring = dataDaFetch.slice(0, 1).toString();
              console.log("data estratta dentro map", datastring);
              console.log("data attuale dentro map", dataCompleta);

              const dataEstrattaSplit = datastring.split("-");
              const dataAttualeSplit = dataCompleta.split("-");
              console.log("data Estratta Split", dataEstrattaSplit);
              console.log("data Attuale Split", dataAttualeSplit);

              const annoEstratto = dataEstrattaSplit.slice(0, 1).toString();
              const meseEstratto = dataEstrattaSplit.slice(1, 2).toString();
              const giornostratto = dataEstrattaSplit.slice(2, 3).toString();
              console.log("annoEstratto", annoEstratto);
              console.log("meseEstratto", meseEstratto);
              console.log("giornostratto", giornostratto);

              const annoAttualeEstratto = dataAttualeSplit
                .slice(0, 1)
                .toString();
              const meseAttualeEstratto = dataAttualeSplit
                .slice(1, 2)
                .toString();
              const giornoAttualestratto = dataAttualeSplit
                .slice(2, 3)
                .toString();
              console.log("annoAttualeEstratto", annoAttualeEstratto);
              console.log("meseAttualeEstratto", meseAttualeEstratto);
              console.log("giornoAttualestratto", giornoAttualestratto);

              console.log("giorno MAP", giorno);
              if (
                annoEstratto === annoAttualeEstratto &&
                meseEstratto === meseAttualeEstratto &&
                giornostratto === giornoAttualestratto
              ) {
                console.log(
                  "stesso GIORNO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
                );

              }else{
                return (
                    <Col key={i}>
                  <Card className=" weather-position giorno-attuale" >
                    <Card.Body>
                      <Card.Title>DATA : {giorno.dt_txt}</Card.Title>
                      {/* TEMPERATURA */}
                      <Card.Text>
                        <Card.Title>GRADI : {gradi} &#176;</Card.Title>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                    </Col>
                )
              }
             
            
            })}
        
        </Row>

      </>
    );
  }
}
export default weatherDataFiveDays;
