import Card from "react-bootstrap/Card"

const FooterWeather = ()=>{
    return(
<Card className="container-fluid text-light footer-weather" bg="dark">
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Fine Footer EPICODE WEATHER.{' '}
          </p>
          <footer className="blockquote-footer">
            2024 <cite title="Source Title">Frank Ricciardi</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    )
}
export default FooterWeather