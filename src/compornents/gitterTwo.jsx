import React, { Component } from 'react';

const GitterTwo = (props) => {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="gitterOne">Gitter One:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Github Username" />
                </div>
                <button onClick={props.addGitterTwo} className="btn btn-secondary">Submit</button>
            </form>
        );
}

export default GitterTwo;