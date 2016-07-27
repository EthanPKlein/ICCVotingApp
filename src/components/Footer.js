import React from 'react'

export default class Footer extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <p className="text-muted">© Copyright 2016. All Rights Reserved, Information Control Company</p>
          </div>
        </footer>
      </div>);
  }

}
