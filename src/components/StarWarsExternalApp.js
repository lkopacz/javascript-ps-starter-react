import React from 'react';
import { connect } from 'react-redux';
import * as StarWarsApp from './StarWarsApp';

class StarWarsExternalApp extends React.Component {
  constructor(props, store) {
    super(props, store);
  }
  // componentDidMount() { }
  render() {
    console.log('StarWarsExternalApp ~ this.props', this.props);
    return (
      <div>
        hello
      </div>
    );
  }
}

export default connect(StarWarsApp.mapStateToProps)(StarWarsExternalApp);
