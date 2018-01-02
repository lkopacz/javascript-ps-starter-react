import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/starwarsActions';
import * as actiontypes from '../actions/starwarsTypes';

import '../styles/starwars.scss';

/*eslint-disable no-console */

class StarWarsApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onAPIChange = this.onAPIChange.bind(this);
    this.state = {
      sw: {
        api_base: actiontypes.STARWARS_API_LOC || null,
        api_base_data: null,
        api_selected: null,
        api_results: null,
      }
    };
  }

  componentDidMount() {
    const mount_actions = this.props.actions;
    const sw = this.state.sw;
    mount_actions.loadStarWars(sw.api_base).then(function (obj) {
      return obj;
    }).then((response) => {
      sw.api_base_data = response.starwars;
      this.setState({
        sw
      });
    }).catch(error => {
      throw (error);
    });
  }

  onAPIChange(event) {
    const mount_actions = this.props.actions;
    const sw = this.state.sw;
    sw.api_selected = event.target.value;
    mount_actions.loadStarWars(sw.api_selected).then(function (obj) {
      return obj;
    }).then((response) => {
      // console.log('response', response.starwars);
      sw.api_results = response.starwars;
      this.setState({
        sw
      });
    }).catch(error => {
      throw (error);
    });
  }

  starwarsRows(el) {
    return (
      <div>
        {
          el.map((item, index) => (
            <div key={index}>
              <div className="headline">{item['name']}{item['title']}</div>
              <div className="stringfied"><pre>{JSON.stringify(item, null, 3)}</pre></div>
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    if (this.state.sw.api_base_data !== null) {
      const api_list = this.state.sw.api_base_data;
      const api_selects = Object.keys(api_list).map(function (k, i) {
        return <option key={i} value={api_list[k]}>{k}</option>;
      });
      const api_results = this.props.starwars.results;
      const api_rows = (api_results) ? this.starwarsRows(api_results) : ' ';
      // console.log('api_results ===>', api_results);
      // console.log('api_rows ===>', api_rows);
      return (
        <div className="sw-component">
          <h4>API Redux Component</h4>
          <p>A sample application showing the use of Redux when fetching external API data from a Star Wars webservice.</p>
          <select onChange={this.onAPIChange}>
            <option value="na">Choose API endpoint</option>
            {api_selects}
          </select>
          <div>
            {api_rows}
          </div>
        </div>
      );
    }
    else {
      return null;
    }

  }
}

StarWarsApp.propTypes = {
  // starwars: PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    starwars: state.starwars
  };
}

function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(StarWarsApp);
