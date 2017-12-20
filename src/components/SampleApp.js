import React from 'react';
import SearchApp from './SearchApp';
import TimeTracker from './timeTracker';
import UserApp from './UserApp';

function SampleApp() {
  return (
    <div className="sample-app">
      <h2>Sample Application</h2>

      <TimeTracker />

      <div className="boxy float-left clearfix">
        <SearchApp />
      </div>

      <div className="boxy float-left clearfix">
        <UserApp />
      </div>

    </div>
  );
}

export default SampleApp;
