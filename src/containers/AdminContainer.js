import React from 'react'
import {Link} from 'react-router'
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';
import Locations from '../components/Locations';
import Admin from '../components/Admin';
import {GET_LOCATIONS, DELETE_LOCATION, RESET_VOTES} from '../constants/actionTypes';

export default class AdminContainer extends React.Component {

 constructor() {
   super();

   this.state = {
     "date": "tba",
     "time": "tba",
     "locations": []
   }

   this.deleteLocation = this.deleteLocation.bind(this);
   this.resetVotes = this.resetVotes.bind(this);
 }

 componentDidMount() {

   var self = this;
   var store = this.props.store;

   $.getJSON('/data.json').done(function (data) {
      // Not sure why, but the time it takes to resolve this promise is important somehow.
      // Without doing so, no results return.
      var data = JSON.parse(localStorage.getItem('VoteApp'));
      store.dispatch({type:'GET_LOCATIONS', locations: data.locations, date: data.date, time: data.time});
   });

   store.subscribe(function() {
     var state = store.getState();
      self.setState({
          locations : state.locations,
          date: state.date,
          time: state.time
      });
    });
 }

 deleteLocation(id) {

console.log("deleting location..." + id);

   var store = this.props.store;
   store.dispatch({
     type: DELETE_LOCATION,
     id: id
   });

   // persist new state
   var state = store.getState();
   localStorage.setItem('VoteApp', JSON.stringify(state));
   alert("Venue has been deleted!");
 }

 resetVotes(id) {

 console.log("resetting votes..." + id);

   var store = this.props.store;
   store.dispatch({
     type: RESET_VOTES,
     id: id
   });

   // persist new state
   var state = store.getState();
   localStorage.setItem('VoteApp', JSON.stringify(state));
   alert("Venue votes have been reset!");
 }

 render() {
   return (<Admin
     locations={this.state.locations}
     deleteLocation={this.deleteLocation}
     resetVotes={this.resetVotes}
   />);
 }

}
