import React from 'react'

export default class Admin extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
      <div className="page-header">
        <h1>Admin</h1>
      </div>
      <p>Perform administration functions here.</p>
      </div>
    );
  }

}
