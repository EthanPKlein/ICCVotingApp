import React from 'react'
import {Link} from 'react-router'
import Header from './Header.js'
import Footer from './Footer.js'

export default class MainLayout extends React.Component {

  render() {
    var myChild = React.cloneElement(this.props.children, {store: this.props.route.store});

    return (<div>
              <div className="container">
              <Header />
              <hr/>
              <div className="container">
                {myChild}
              </div>
              <Footer />
              </div>
            </div>);
  }

}
