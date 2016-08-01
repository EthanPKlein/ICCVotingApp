import React from 'react'

export default class VoteList extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {

    var listItemStyle = {
      border: '1px solid black',
      borderRadius: '5px',
      margin: '3px',
      padding: '3px',
      fontWeight: 'bold',
    };

    return (
      <div>
        <span style={listItemStyle}>{this.props.id+1}: {this.props.email}</span>
      </div>
    );

  }

}
