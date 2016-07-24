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
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>);
  }

}
