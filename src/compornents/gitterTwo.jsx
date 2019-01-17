import React, { Component } from 'react';

class GitterTwo extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            query: ''
        }
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGitterTwo(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gitterOne">Contender Two:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Github Username" onChange={this.handleChange} />
                </div>
                <input type="submit" className="btn btn-secondary" value="Submit"></input>
            </form>
        );
    }
}

export default GitterTwo;