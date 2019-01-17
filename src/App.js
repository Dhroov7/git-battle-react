import React, { Component } from 'react';
import Navbar from './compornents/navbar'
import Gitter from './compornents/gitter'
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      gitterOne: {},
      gitterTwo: {},
      battleIsOn: false
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Gitter addGitterOne={this.addGitterOne} addGitterTwo={this.addGitterTwo} />
      </div>
    );
  }

  addGitterOne = (query) => {
    // e.preventDefault()
    axios.get(`https://api.github.com/users/${query}`).then((response) => {
      this.setState({ gitterOne: response.data })
    })
  }

  addGitterTwo = () => {

  }
}

export default App;
