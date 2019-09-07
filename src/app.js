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
  er: ''
}

handleInputChange = (e) => {
  this.setState({
    value: e.target.value

  })


}
handleCitySubmit = (e) => {
  e.preventDefault()
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric}`

  fetch(API)
    .then(res => {
      if(res.ok) {
        return res
      }
      throw Error('doesn\'t work')
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}



render () {
  return (
    <div className="App">
      <Form
      value={this.state.value}
      change={this.handleInputChange}
      submit={this.handleCitySubmit}
      />

      <Result />
    </div>
  )

}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
