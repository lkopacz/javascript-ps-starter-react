import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as graphqlclientActions from '../actions/graphqlclientActions';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';
import '../styles/graphql.scss';
import * as actions from '../actions/graphqlclientActions';

class GraphqlClientApp extends React.Component {

  constructor(props, store) {
    super(props, store);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      graphql_data: [],
      show_villains: false
    };
  }

  componentDidMount() {
    const mount_actions = this.props.actions;
    mount_actions.loadGraphQL().then(function (obj) {
      return obj;
    }).then((response) => {
      // console.log('response ==>', response.graphql.data);
      this.setState({ graphql_data: response.graphql.data });
    }).catch(error => {
      throw (error);
    });
  }

  villainRows(el) {
    return (
      <div>
        {
          el.map((item, index) => (
            <div className="rows-villains" key={index}>
              {item['image'] ? <img src={item['image']} /> : null}
              <div className="id">ID: {item['id']}</div>
              <div className="name">Name: {item['name']}</div>
              {item['age'] ? <div className="age">Age: {item['age']}</div> : null}
              {item['weight'] ? <div className="weight">Weight: {item['weight']}</div> : null}
              {item['description'] ? <div className="description">Description: {item['description']}</div> : null}
              {item['powers'] ? <div className="powers">Powers: {item['powers']}</div> : null}
              {item['first_appearance'] ? <div className="first_appearance">First Appearance: {item['first_appearance']}</div> : null}
            </div>
          ))
        }
      </div>
    );
  }

  handleClick(event) {
    const e = event.target.value;
    const mount_actions = this.props.actions;
    mount_actions.loadGraphQL(e).then(function (obj) {
      return obj;
    }).then((response) => {
      // console.log('response ==>', response.graphql.data);
      this.setState({ graphql_data: response.graphql.data });
      this.setState({ show_villains: true });
    }).catch(error => {
      throw (error);
    });
  }

  render() {

    const graphql_data = this.props.graphql.data;
    // console.log('this.state is here ==> ', this.state);

    if (graphql_data === undefined || graphql_data === null) {
      return false;
    }

    const villain_data = graphql_data.hasOwnProperty('allVillains') ? this.villainRows(graphql_data.allVillains) : ' ';
    const villain_count = graphql_data.hasOwnProperty('totalVillains') ? 'Total Villains: ' + graphql_data.totalVillains : ' ';

    return (

      <div className="boxy float-left clearfix">

        <h4>GraphQL Client Query Component</h4>

        <p>This application shows custom queries which are fetching data from the GraphQL server located at <a href="http://localhost:8081/graphiql" target="_blank">http://localhost:8081/graphiql</a>.
        This data is also being stored within the Redux store state.</p>
        <br />

        <button className="button" type="button" value="default" onClick={this.handleClick}>Show all Villain Summary</button>
        &nbsp;
        <button className="button" type="button" value="full_list" onClick={this.handleClick}>Show all Villain Properties</button>
        &nbsp;
        <button className="button" type="button" value="total_villains" onClick={this.handleClick}>Show Villain Count</button>

        {this.state.show_villains ?
          <div className="data-for-villans">
            {villain_data}
            {villain_count}
          </div>
          :
          <span>&nbsp;</span>
        }

      </div>

    );
  }
}

export function mapStateToProps(state) {
  return {
    graphql: state.graphql
  };
}

export function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(GraphqlClientApp);
