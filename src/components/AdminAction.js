import React from 'react'

export default class AdminAction extends React.Component {

  constructor(props) {
   super(props);
   this.deleteLocation = this.deleteLocation.bind(this);
  }

  deleteLocation(id) {
    console.log("AdminAction deleting location..." + id);
    this.props.deleteLocation(id);
  }

  render() {
    var id = this.props.id;
    return (
      <div>
        <button type="button" className="btn btn-default btn-lg btn-danger" onClick={() => this.deleteLocation(id)} >
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          Delete {this.props.name}!
        </button> <br /><br />
      </div>);
  }

}
