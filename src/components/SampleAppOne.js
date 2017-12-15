import React from 'react';

/**
 * use state to affect 3 things
 * pass values up thru the parent down to kids
 */

class SampleAppOne extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      filterText: '',
      postText: false
    };
  }

  handleChange(event) {
    let e = event.target.value;
    this.setState({
      filterText: e,
      postText: (e.length > 3) ? true : false
    });
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" value={this.state.filterText} onChange={this.handleChange} />
          <p>
            {this.state.postText ? 'Your selection is: ' + this.state.filterText : ''}
          </p>
        </form>
      </div>
    );
  }
}

export default SampleAppOne;
