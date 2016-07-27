import React from 'react'

export default class EnterEmail extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
      <div className="alert alert-info" role="alert">
        <p>In order to vote, please enter your ICC email below!</p>
        <form>

          <fieldset className="form-group">
            <label htmlFor="email">ICC email:</label>
            <input type="text" className="form-control" id="email" placeholder="jdoe@icct.com" />
          </fieldset>

        </form>
        </div>
      </div>);
  }

}
