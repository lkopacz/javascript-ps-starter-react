import React from 'react';
import SampleAppOne from './SampleAppOne';
import TimeTracker from './timeTracker';
import CoursePages from './CoursePages';

/**
 * use state to affect 3 things
 *
 */

function SampleApp() {
  return (
    <div className="sample-app">
      <h2>Sample Application</h2>

      <TimeTracker />
      <SampleAppOne />
      <CoursePages />

    </div>
  );
}

export default SampleApp;
