import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../actions/courseActions';

/*eslint-disable no-console */

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
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    // console.log('courseRow', course);
    return <div key={index}>{course.title}</div>;
  }

  render() {
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
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) { // , ownProps
  return {
    courses: state.courses
  };
}


// function MapDispatchToProps(state, ownProps){
//   return {
//     courses: state.courses
//   };
// }
// , MapDispatchToProps

export default connect(mapStateToProps)(CoursePages);
