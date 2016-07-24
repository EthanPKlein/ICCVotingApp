import React from 'react'
import About from './About.js'

export default class Home extends React.Component {

  constructor(props) {
   super(props);
  }
  render() {
    return (<div>
            <div className="page-header">
              <h1>ICC Voting App</h1>
            </div>
            <About />
          </div>);
  }

}
