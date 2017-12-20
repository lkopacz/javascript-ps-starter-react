import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../actions/courseActions';

/*eslint-disable no-console */

// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=9&mode=live

class CoursePages extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      course: { title: null }
    };
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    // console.log('onTitleChange', course);
    this.setState({
      course
    });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    // console.log('courseRow', course);
    return <div key={index}>{course.title}</div>;
  }

  render() {
    // debugger;
    if (this.props.courses.length) {
      console.log('Render() for this.props.courses', this.props.courses);
    }
    return (
      <div>
        <span className="course-list">
          {this.props.courses.map(this.courseRow)}
        </span>
        <input onChange={this.onTitleChange} value={this.props.courses.title} type="text" />
        <input onClick={this.onClickSave} type="submit" value="send >" />
      </div>
    );
  }
}

CoursePages.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) { // , ownProps
  // debugger;
  return {
    courses: state.courses
  };
}

function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(CoursePages);
