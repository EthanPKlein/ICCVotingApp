import React from 'react'
import VoteInformation from './VoteInformation.js'
import Location from './Location.js'
import EnterEmail from './EnterEmail.js'

export default class Locations extends React.Component {

  constructor(props) {
    console.log("constructing...");
    super(props);
    //this.renderUser = this.renderUser.bind(this);
    this.renderLocation = this.renderLocation.bind(this);

   this.state = {
     "date": "August 15",
     "time": "6:00pm",
     "locations": [
       {
         "id": 1,
         "name": "Magic Mountain",
         "address": "8350 Lyra Dr, Columbus, OH 43240",
         "imageUrl": "http://www.bwcolumbushotel.com/images/CommanFile/EVTMagic_Mountain_PolarisBest_Western_Columbus_North_Hotel_-_Magic_Mountain_Polaris.jpg",
         "description": "A lovely little place to go and play some mini golf with friends or zoom around with some go-karts!",
         "votes": ["eklein@icct.com", "mrnobody@icct.com"]
       },
       {
         "id": 2,
         "name": "Buffalo Wild Wings",
         "address": "2151 N High St, Columbus, OH 43201",
         "imageUrl": "http://www.buffalowildwings.com/moreexcuses/images/slider-landing.jpg?1469404800022",
         "description": "A nice little restaurant featuring wings of a wide variety of spices.  Has a good selection of beer on tap and the televisions always play the best sports games.",
         "votes": ["ILikeChicken@icct.com"]
       },
       {
         "id": 3,
         "name": "Champions Golf Course",
         "address": "3900 Westerville Road, Columbus, OH 43224",
         "imageUrl": "http://imavex.vo.llnwd.net/o18/clients/columbusgolf/images/Golf_Course/course_overview_champions.jpg",
         "description": "Big, grassy open course reasonable for ameteurs and veterans alike.  Comes with golf cart rentals and scuba gear for retrieving balls in the water traps!",
         "votes": []
       }
     ]
   }


   //$.getJSON('/data.json').done(function (data) {
     //this.state = data;
    //store.dispatch({type:'GET_LIST', users: data.list});
   //});

  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Suggested Venues</h1>
        </div>
        <VoteInformation time={this.state.time} date={this.state.date} />
        <EnterEmail />
        <p>Here are all the locations you can vote on:</p>
        {this.state.locations.map(this.renderLocation)}
      </div>);
  }

  renderLocation(location, i) {
    return(<Location key={i} location={location}/>);
  }

}
