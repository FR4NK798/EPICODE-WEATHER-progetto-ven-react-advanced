import {Component} from 'react'

class weatherDataFiveDays extends Component {

    state={

        weatherDataFiveDays : []
    
    };
render(){
    const gradi = Math.ceil(this.props.data.main.temp - 273)
    this.setState({
        weatherDataFiveDays : this.props.data
    }
        
    )
    return(

    this.state.weatherDataFiveDays.map((element)=>{
        
    })

    )
}
}
export default weatherDataFiveDays