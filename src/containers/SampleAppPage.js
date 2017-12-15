import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import SampleApp from '../components/SampleApp';

import '../styles/sampleapp.scss';

export class SampleAppPage extends React.Component {

  render() {
    return (
        <SampleApp />
    );
  }
}



export default connect()(SampleAppPage);
