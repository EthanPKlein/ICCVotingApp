import React from 'react'
import VoteList from './VoteList.js'

export default class AdminAction extends React.Component {

  constructor(props) {
   super(props);
   this.deleteLocation = this.deleteLocation.bind(this);
   this.renderVoteEmail = this.renderVoteEmail.bind(this);
  }

  renderVoteEmail(email, i) {
    return(
      <div key={i}>
        <VoteList email={email} id={i} />
      </div>
    );
  }

  deleteLocation(id) {
    console.log("AdminAction deleting location..." + id);
    this.props.deleteLocation(id);
  }

  resetVotes(id) {
    console.log("AdminAction resetting votes..." + id);
    this.props.resetVotes(id);
  }

  render() {
    var id = this.props.id;
    return (
      <div>
        <p>Votes:</p>
        {this.props.votes.map(this.renderVoteEmail)}
        <button type="button" className="btn btn-default btn-lg btn-danger" onClick={() => this.deleteLocation(id)} >
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          Delete {this.props.name}
        </button>
        <button type="button" className="btn btn-default btn-lg btn-warning" onClick={() => this.resetVotes(id)} >
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          Reset votes
        </button>
         <br /><br />
      </div>);
  }

}
