import React from 'react';
import SearchApp from './SearchApp';
import TimeTracker from './timeTracker';
import UserApp from './UserApp';
import StarWarsApp from './StarWarsApp';
import StarWarsExternalApp from './StarWarsExternalApp';
import IncrementApp from './IncrementApp';

/**
 * @TODO
 * pin node version
 * add GraphQL
 */

function SampleApp() {
  return (
    <div className="sample-app">

    <TimeTracker />

      <h2>Collection of Sample Components</h2>

      <div className="boxy float-left clearfix">
        <SearchApp />
      </div>

      <div className="boxy float-left clearfix">
        <IncrementApp />
      </div>

      <div className="boxy float-left clearfix">
        <UserApp />
      </div>

      <div className="boxy float-left clearfix">
        <StarWarsApp />
      </div>

      <div className="boxy float-left clearfix">
        <StarWarsExternalApp />
      </div>


    </div>
  );
}

export default SampleApp;
