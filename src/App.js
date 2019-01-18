import React, { Component } from 'react';
import Gitter from './compornents/gitter'
import Winner from './compornents/winner'
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      gitterOne: {},
      gitterTwo: {},
      battleIsOn: false,
      winner: {},
      loser: {},
      tie: 'false'
    }

    this.headingStyle = {
      fontSize: '100px',
      fontFamily: '"Comic Sans MS", cursive, sans-serif',
      marginBottom: '150px',
      color: 'lightgrey',
      textDecoration: 'none'
    }

    this.fotterStyle = {
      color: 'lightgrey !important',
      fontFamily: '"Comic Sans MS", cursive, sans-serif',
      fontSize: '20px',
      marginTop: '12%',
      position: 'relative',
      left: '75%'
  }

  }

  render() {
    let afterSubmit = <Gitter addGitterOne={this.addGitterOne}
      addGitterTwo={this.addGitterTwo} battleIsOn={this.state.battleIsOn}
      gitterOne={this.state.gitterOne} gitterTwo={this.state.gitterTwo} battle={this.battle} />
    
    let fotter 
    if (Object.keys(this.state.winner).length > 0) {
      afterSubmit = <Winner winner={this.state.winner} loser={this.state.loser} />
    }

    if(!this.state.battleIsOn){
      fotter = <footer style={this.fotterStyle}>Made with <span>❤️</span> By Dhroov Gupta</footer>
    }
    return (
      <div>
        <h1 className="mt-5" align="center"><a style={this.headingStyle} href="/">Git Battle</a></h1>
        {afterSubmit}
        {fotter}
      </div>
    );
  }

  addGitterOne = (query) => {
    axios.get(`https://api.github.com/users/${query}`).then((response) => {
      this.setState({ gitterOne: response.data })
      if (Object.keys(this.state.gitterOne).length > 0 && Object.keys(this.state.gitterTwo).length > 0) {
        this.setState({ battleIsOn: true })
      }

    })
  }

  addGitterTwo = (query) => {
    axios.get(`https://api.github.com/users/${query}`).then((response) => {
      this.setState({ gitterTwo: response.data })

      if (Object.keys(this.state.gitterOne).length > 0 && Object.keys(this.state.gitterTwo).length > 0) {
        this.setState({ battleIsOn: true })
      }

    })
  }

  battle = () => {
    let gitterOne = this.state.gitterOne
    let gitterTwo = this.state.gitterTwo

    gitterOne.score = gitterOne.followers * 2 + gitterOne.public_repos * 10 + gitterOne.public_gists * 5 + (gitterOne.bio ? 1 : 0) + (gitterOne.Company ? 2 : 0);

    gitterTwo.score = gitterTwo.followers * 2 + gitterTwo.public_repos * 10 + gitterTwo.public_gists * 5 + (gitterTwo.bio ? 1 : 0) + (gitterTwo.Company ? 2 : 0);

    console.log(gitterOne.score + " " + gitterTwo.score)
    if (gitterOne.score > gitterTwo.score) {
      this.setState({ winner: gitterOne })
      this.setState({ loser: gitterTwo })
      return
    } else if (gitterOne.score < gitterTwo.score) {
      this.setState({ winner: gitterTwo })
      this.setState({ loser: gitterOne })
      return
    }

    this.setState({ tie: true })

  }
}

export default App;
