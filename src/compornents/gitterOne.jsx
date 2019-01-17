import React, { Component } from 'react';

class GitterOne extends Component {
    
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            query: ''
        }
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGitterOne(this.state.query)
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gitterOne">Contender Two:</label>
                    <input type="text" id="gitterOne" className="form-control" placeholder="Enter Your Github Username" onChange={this.handleChange} />
                </div>
                <input type="submit" className="btn btn-secondary" value="Submit"></input>
            </form>
        );
    }
}
 
export default GitterOne;