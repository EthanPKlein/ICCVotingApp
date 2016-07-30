import React from 'react'
import {Link} from 'react-router'
//import {connect} from 'react-redux';
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';
import Locations from '../components/Locations';

export default class LocationsContainer extends React.Component {

 constructor() {
   super();

   this.state = {
     "date": "tba",
     "time": "tba",
     "locations": []
   }

   //this.addUser = this.addUser.bind(this);
 }

 componentDidMount() {

   console.log("Locations Container did mount.");

   var self = this;
   var store = this.props.store;
   $.getJSON('/data.json').done(function (data) {
      console.log("dispatching...");
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

 // addUser() {
 //   var store = this.props.store;
 //   store.dispatch({
 //         type: 'ADD_USER',
 //         user: {name:"dummy dummy", email:'dummy@icct.com'}
 //       });
 // }

 render() {
   return (<Locations
   date={this.state.date}
   time={this.state.time}
   locations={this.state.locations}
   />);
 }

}
