import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Fragment>
            <h2 className="text-center">Home</h2>
            <Link to="/employee" className="text-center">Employee Module</Link>
        </Fragment>);
    }

}

export default withRouter(Home);