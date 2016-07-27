import React from 'react'

export default class Upvote extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
          Vote for {this.props.name}!
        </button> <br /><br />
      </div>);
  }

}
