import React from 'react'

export default class Location extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {

    var imageStyle = {
      border: '3px solid black',
      maxHeight:'300px',
      maxWidth:'300px',
      margin: '10px'
    };

    return (
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.location.name}</div>
        <div className="panel-body">
          <img src={this.props.location.imageUrl} style={imageStyle} alt={this.props.location.name} />
            <p>{this.props.location.description}</p>
            <p><b>{this.props.location.address}</b></p>
        </div>
        <div className="panel-footer">
            <span className="glyphicon-class">This venue has <b>{this.props.location.votes.length}</b> votes!</span>
        </div>
        </div>
      </div>);

  }

}
