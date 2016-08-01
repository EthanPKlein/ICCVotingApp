import React from 'react'
import Location from './Location.js'
import AdminAction from './AdminAction.js'

export default class Admin extends React.Component {

  constructor(props) {
   super(props);
   this.renderLocation = this.renderLocation.bind(this);
  }

  render() {
    return (
      <div>
      <div className="page-header">
        <h1>Admin</h1>
      </div>
      <p>Perform administration functions here.</p>
      {this.props.locations.map(this.renderLocation)}
      </div>
    );
  }

  renderLocation(location, i) {
    return(
      <div key={i}>
        <Location location={location} />
        <AdminAction name={location.name} id={location.id} deleteLocation={this.props.deleteLocation}/>
      </div>
    );
  }

}
