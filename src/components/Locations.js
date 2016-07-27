import React from 'react'
import VoteInformation from './VoteInformation.js'

export default class Locations extends React.Component {

  constructor(props) {
    console.log("constructing...");
   super(props);
   //var self = this;

this.state = {date:'July 30', time:'5:00pm'};

   //this.setState({date:'adsf', time:'now'});
  // console.log("done...");

   //$.getJSON('/data.json').done(function (data) {
      //store.dispatch({type:'GET_LIST', users: data.list});
      //console.log(data);
      //self.setState(data);
      //self.state = data;
    //  self.setState(data);
    //  console.log("JSON Got!");
    //  console.log(self.state);

  // });

  }



  render() {
    //console.log("rendering...");
    //console.log(this.state);
    return (
      <div>
        <div className="page-header">
          <h1>Suggested Venues</h1>
        </div>
        <VoteInformation time={this.state.date}/>
        <p>Here are all the locations you can vote on:</p>



      </div>);
  }

}
