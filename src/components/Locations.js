import React from 'react'
import VoteInformation from './VoteInformation.js'
import Location from './Location.js'
import EnterEmail from './EnterEmail.js'
import Upvote from './Upvote.js'

export default class Locations extends React.Component {

  constructor(props) {

    super(props);
    this.renderLocation = this.renderLocation.bind(this);

  }

  componentDidMount() {
    console.log("component did mount...");

  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Suggested Venues</h1>
        </div>
        <VoteInformation time={this.props.time} date={this.props.date} />
        <EnterEmail />
        <p>Here are all the locations you can vote on:</p>
        {this.props.locations.map(this.renderLocation)}
      </div>);
  }

  renderLocation(location, i) {
    return(
      <div key={i}>
        <Location location={location} />
        <Upvote name={location.name} id={location.id} addVote={this.props.addVote}/>
      </div>
    );
  }

}
