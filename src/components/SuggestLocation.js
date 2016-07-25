import React from 'react'

export default class SuggestLocation extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
      <div className="page-header">
        <h1>Suggest a new Venue</h1>
      </div>
        <p>Nothing appeal to you?  Suggest a new venue to your coworkers by filling out this form.</p>
        <form>

          <fieldset className="form-group">
            <label for="name">Venue Name</label>
            <input type="text" className="form-control" id="name" placeholder="Super Fun Center!" />
          </fieldset>

          <fieldset className="form-group">
            <label for="address">Venue Address</label>
            <input type="text" className="form-control" id="address" placeholder="123 Fake Street" />
            <small className="text-muted">Be sure to include city, state, and zip code.</small>
          </fieldset>

          <fieldset className="form-group">
            <label for="image">Image</label>
            <input type="text" className="form-control" id="image" placeholder="www.prettyimage.com/prettything.jpg" />
            <small className="text-muted">(Optional) submit the URL for an image depicting this venue.</small>
          </fieldset>

          <button type="submit" class="btn btn-primary">Submit</button>

        </form>

      </div>);
  }

}
