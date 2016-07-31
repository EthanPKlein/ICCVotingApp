import React from 'react'
import {Link} from 'react-router'
//import {connect} from 'react-redux';
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';
import Locations from '../components/Locations';
import {ADD_LOCATION, ADD_VOTE, GET_LOCATIONS, SEED_LOCATIONS} from '../constants/actionTypes';

export default class LocationsContainer extends React.Component {

 constructor() {
   super();

   this.state = {
     "date": "tba",
     "time": "tba",
     "locations": []
   }

   this.addVote = this.addVote.bind(this);
 }

 componentDidMount() {

   console.log("Locations Container did mount.");

   var self = this;
   var store = this.props.store;

   $.getJSON('/data.json').done(function (data) {
      console.log("dispatching...");
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

 addVote(id) {

   var email = document.getElementById('email').value;

   console.log("adding Vote on LocationContainer! ID: " + id + ".  Email: " + email);

   var store = this.props.store;
   store.dispatch({
     type: ADD_VOTE,
     id: id,
     email: email
   });
 }

 render() {
   return (<Locations
   date={this.state.date}
   time={this.state.time}
   locations={this.state.locations}
   addVote={this.addVote}
   />);
 }

}
