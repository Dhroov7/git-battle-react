import React, { Component } from 'react';
import GitterOne from './gitterOne'
import GitterTwo from './gitterTwo'

class Gitter extends Component {
    state = {}
    render() {
        let battleButton
        if (this.props.battleIsOn) {
            battleButton = <button onClick={this.props.battle} className="btn btn-secondary">Battle</button>
        }
        return (
            <div>
                <div className="row m-5">
                    <div className="col-2"></div>
                    <div className="col">
                        <GitterOne addGitterOne={this.props.addGitterOne} battleIsOn={this.props.battleIsOn} gitterOne={this.props.gitterOne} />
                    </div>
                    <div className="col-2"></div>
                    <div className="col">
                        <GitterTwo addGitterTwo={this.props.addGitterTwo} battleIsOn={this.props.battleIsOn} gitterTwo={this.props.gitterTwo} />
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row m-3">
                    <div className="col-5"></div>
                    <div className="col-2">
                        {battleButton}
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        );
    }
}

export default Gitter;