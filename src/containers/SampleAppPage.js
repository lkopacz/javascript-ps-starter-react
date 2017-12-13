import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import SampleApp from '../components/SampleApp';

export class SampleAppPage extends React.Component {
  // saveFuelSavings = () => {
  //   this.props.actions.saveFuelSavings(this.props.fuelSavings);
  // }

  // calculateFuelSavings = e => {
  //   this.props.actions.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  // }

  render() {
    return (
      <SampleApp />
    );
  }
}

// SampleAppPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   fuelSavings: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     fuelSavings: state.fuelSavings
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(dispatch)
//   };
// }

export default connect()(SampleAppPage);
