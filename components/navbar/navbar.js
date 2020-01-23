import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
        return (
            <div className="nav-bar">
                <ul className="nav-bar-list">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/new"}>Create God</Link>
                    </li>
                    <li>
                        <Link to={"/gods/:id"}>God detail</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(NavBar);

