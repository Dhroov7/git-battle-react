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
        <Gitter addGitterOne={this.addGitterOne} addGitterTwo={this.addGitterTwo} battleIsOn={this.state.battleIsOn}/>
      </div>
    );
  }

  addGitterOne = (query) => {
    axios.get(`https://api.github.com/users/${query}`).then((response) => {
      this.setState({ gitterOne: response.data })
      if(Object.keys(this.state.gitterOne).length > 0 && Object.keys(this.state.gitterTwo).length > 0){
        this.setState({battleIsOn: true})
      }

    })
  }

  addGitterTwo = (query) => {
    axios.get(`https://api.github.com/users/${query}`).then((response) => {
      this.setState({ gitterTwo: response.data })

      if(Object.keys(this.state.gitterOne).length > 0 && Object.keys(this.state.gitterTwo).length > 0){
        this.setState({battleIsOn: true})
      }

    })
  }
}

export default App;
