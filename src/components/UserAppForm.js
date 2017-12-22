import React from 'react';
import PropTypes from 'prop-types';

const UserAppForm = ({ onNameChange, Name, onTitleChange, Title, onClickSave, UserRow }) => {

  return (
    <div className="user-container">
      <h4>User Redux Component</h4>
      <p>This is an example of Redux and typical state workflow when dealing with persistance states.</p>
      <form onSubmit={onClickSave}>
        <input placeholder="Name" onChange={onNameChange} value={Name} type="text" />
        <input placeholder="Title" onChange={onTitleChange} value={Title} type="text" />
        <input className="button" type="submit" value="send >" />
      </form>
      <span className="user-list">{UserRow}</span>
    </div>
  );
};

UserAppForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  Name: PropTypes.func,
  onTitleChange: PropTypes.func,
  Title: PropTypes.string,
  onClickSave: PropTypes.func,
  UserRow: PropTypes.array.isRequired
};

export default UserAppForm;
