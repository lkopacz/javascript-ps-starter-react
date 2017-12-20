import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as starwarsActions from '../actions/starwarsActions';

/*eslint-disable no-console */

class StarWarsApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onNameChange = this.onNameChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      starwars: {
        name: null,
        title: null
      }
    };
  }

  onNameChange(event) {
    const starwars = this.state.starwars;
    starwars.name = event.target.value;
    this.setState({
      starwars
    });
  }

  onTitleChange(event) {
    const starwars = this.state.starwars;
    starwars.title = event.target.value;
    this.setState({
      starwars
    });
  }

  onClickSave() {
    this.props.actions.createStarWars(this.state.starwars);
  }

  starwarsRow(starwars, index) { //
    // console.log('userRow', user);
    return <div key={index}>name: {starwars.name} <br /> title: {starwars.title}</div>;
  }

  render() {
    return (
     <div>
      <input placeholder="Type Name" onChange={this.onNameChange} value={this.props.starwars.name} type="text" />
      <input placeholder="Type Title" onChange={this.onTitleChange} value={this.props.starwars.title} type="text" />
      <input onClick={this.onClickSave} type="submit" value="fetch api" />
      <span className="starwars-list">{this.props.starwars.map(this.starwarsRow)}</span>
     </div>
    );
  }
}

// StarWarsApp.propTypes = {
//   starwars: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    starwars: state.starwars
  };
}

function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(starwarsActions, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(StarWarsApp);
