import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';

import '../styles/userapp.scss';

/*eslint-disable no-console */

class UserApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onNameChange = this.onNameChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      user: {
        name: null,
        title: null
      }
    };
  }

  onNameChange(event) {
    const user = this.state.user;
    user.name = event.target.value;
    this.setState({
      user
    });
  }

  onTitleChange(event) {
    const user = this.state.user;
    user.title = event.target.value;
    this.setState({
      user
    });
  }

  onClickSave() {
    // console.log(this.props.actions);
    this.props.actions.createUser(this.state.user);
  }

  userRow(user, index) {
    // console.log('userRow', user);
    return <div key={index}>name: {user.name} <br /> title: {user.title}</div>;
  }

  render() {
    // debugger;
    if (this.props.users.length) {
      console.log('Render() for this.props.users', this.props.users);
    }
    return (
      <div className="user-container">

        <h4>User Component</h4>
        <p>This is an example of Redux and typical state workflow.</p>

        <input placeholder="Type Name" onChange={this.onNameChange} value={this.props.users.name} type="text" />
        <input placeholder="Type Title" onChange={this.onTitleChange} value={this.props.users.title} type="text" />
        <input onClick={this.onClickSave} type="submit" value="send >" />
        <span className="user-list">{this.props.users.map(this.userRow)}</span>
      </div>
    );
  }
}

UserApp.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(UserApp);
