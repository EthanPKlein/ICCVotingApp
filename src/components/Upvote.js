import React from 'react'

export default class Upvote extends React.Component {

  constructor(props) {
   super(props);
   this.vote = this.vote.bind(this);
  }

  vote(id) {
    this.props.addVote(id, 'derp@icct.com');
    console.log("vote cast! " + id);
  }

  render() {
    var id = this.props.id;
    return (
      <div>
        <button type="button" className="btn btn-default btn-lg" onClick={() => this.vote(id)} >
          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
          Vote for {this.props.name}!
        </button> <br /><br />
      </div>);
  }

}
