import React from 'react'

export default class VoteInformation extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <p>This social event is scheduled on <b>{this.props.date}</b> at <b>{this.props.time}</b>.  Do not miss it!</p>
      </div>);
  }

}
