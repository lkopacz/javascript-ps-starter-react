import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as incrementActions from '../actions/incrementActions';

/*eslint-disable no-console */

class IncrementApp extends React.Component {

  constructor(props, store) {
    super(props, store);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      number: 0
    };
    this.props.actions.createNumber(this.state.number);
  }

  handleClick(event) {
    let e = event.target.value;
    console.log('this.state -> ', this.state);
    if (e == '- 1') {
      this.setState({ number: --this.state.number });
    } else {
      this.setState({ number: ++this.state.number });
    }
    this.props.actions.createNumber(this.state.number); // update store
  }

  render() {
    console.log('this.props.number ==> ', this.props.number);
    return (
      <div>
        <p>
          <input className="button" type="button" value="- 1" onClick={this.handleClick} />
          &nbsp;
        <input className="button" type="button" value="+ 1" onClick={this.handleClick} />
        </p>
        <p>Number: {this.props.number}</p>
      </div>
    );
  }
}

IncrementApp.propTypes = {
  number: PropTypes.number.number,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(incrementActions, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(IncrementApp);
