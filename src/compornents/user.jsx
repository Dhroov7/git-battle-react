import React, { Component } from 'react';

class User extends Component {
    state = {}
    render() {
        return (
            <div className="row m-5">
                <div className="col-2"></div>
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label for="gitterOne">Gitter One:</label>
                            <input type="text" class="form-control" placeholder="Enter Your Github Username" />
                        </div>
                        <button type="submit" class="btn btn-secondary">Submit</button>
                    </form>
                </div>
                <div className="col-2"></div>
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label for="gitterOne">Gitter Two:</label>
                            <input type="text" class="form-control" placeholder="Enter Your Github Username" />
                        </div>
                        <button type="submit" class="btn btn-secondary">Submit</button>
                    </form>
                </div>
                <div className="col-2"></div>
            </div>
        );
    }
}

export default User;