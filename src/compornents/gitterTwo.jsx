import React, { Component } from 'react';

class GitterTwo extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            query: ''
        }
        this.style = {
            borderRadius: '50%',
            width: '70%'
        }

        this.inputBoxStyle = {
            borderRadius: '25px',
            backgroundColor: '#C0C0C0'
        }

        this.buttonStyle = {
            borderRadius: '25px'
        }

        this.labelStyle = {
            color: 'lightgrey',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontSize: '20px'
        }

        this.gitterNameStyle = {
            color: 'lightgrey',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontSize: '30px'
        }
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGitterTwo(this.state.query)
    }

    render() {

        if (Object.keys(this.props.gitterTwo).length > 0) {
            return (
                <div className="row">
                    <div className="col-12">
                        <img style={this.style} src={this.props.gitterTwo.avatar_url} alt="contender One"></img>
                    </div>
                    <div className="col-12 mt-2">
                        <h2 style={this.gitterNameStyle}>{this.props.gitterTwo.name}</h2>
                    </div>
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gitterOne" style={this.labelStyle}>Contender Two:</label>
                    <input type="text" style={this.inputBoxStyle} className="form-control" placeholder="Enter Your Github Username" onChange={this.handleChange} />
                </div>
                <input type="submit" style={this.buttonStyle} className="btn btn-secondary" value="Submit"></input>
            </form>
        );
    }
}

export default GitterTwo;