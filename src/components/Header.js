import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="#">ICC Voting App</Link>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/locations" className="nav-link" href="#">View Locations</Link>
              </li>
              <li>
                <Link to="/" className="nav-link" href="#">Suggest a Location</Link>
              </li>
              <li>
                <Link to="/" className="nav-link" href="#">Admin</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>);
  }

}
