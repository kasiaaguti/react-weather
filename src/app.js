import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Form from './components/Form'
import Result from './components/Result'
const APIkey='e1e693e143202a3394a08df333dbf209'

class App extends React.Component {


state = {
  value: '',
  date: '',
  city: '',
  sunrise: '',
  sunset: '',
  temp: '',
  pressure: '',
  wind: '',
  err: false
}

handleInputChange = (e) => {
  this.setState({
    value: e.target.value

  })


}
handleCitySubmit = (e) => {
  e.preventDefault()
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&unit=metric}`

  fetch(API)
    .then(res => {
      if(res.ok) {
        return res
      }
      throw Error('doesn\'t work')
    })
    .then(res => res.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState({
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: this.state.value

      })



    })
    .catch(err => {
      console.log(err)
      this.setState(prevState => ({
        err: true,
        city: prevState.value
      }))
    })
}



render () {
  return (
    <div className="App">
      <Form
      value={this.state.value}
      change={this.handleInputChange}
      submit={this.handleCitySubmit}
      />

      <Result weather = {this.state}/>
    </div>
  )

}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
