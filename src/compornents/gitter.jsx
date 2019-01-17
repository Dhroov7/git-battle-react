import React, { Component } from 'react';
import GitterOne from './gitterOne'
import GitterTwo from './gitterTwo'

class Gitter extends Component {
    state = {}
    render() {
        return (
            <div className="row m-5">
                <div className="col-2"></div>
                <div className="col">
                    <GitterOne addGitterOne={this.props.addGitterOne} />
                </div>
                <div className="col-2"></div>
                <div className="col">
                    <GitterTwo addGitterTwo={this.props.addGitterTwo} />
                </div>
                <div className="col-2"></div>
            </div>
        );
    }
}

export default Gitter;