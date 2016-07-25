import React from 'react'

export default class Locations extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Suggested Venues</h1>
        </div>
        <p>Here are all the locations you can vote on:</p>
      </div>);
  }

}
