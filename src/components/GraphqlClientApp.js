import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/graphql.scss';
import * as actions from '../actions/graphqlclientActions';

class GraphqlClientApp extends React.Component {

  constructor(props, store) {
    super(props, store);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      graphql_data: [],
      show_villains: false,
      filter_villain_id: '',
      id_error: false,
    };
  }

  fetchGraphQLData(actions, value, id = 0) {
    actions.loadGraphQL(value, id).then(function (obj) {
      return obj;
    }).then((response) => {
      // console.log('fetchGraphQLData() response ==>', response.graphql.data);
      return response.graphql.data;
    }).catch(error => {
      throw (error);
    });
  }

  componentDidMount() {
    const actions = this.props.actions;
    this.setState({ graphql_data: this.fetchGraphQLData(actions, 'default') });
  }

  handleClick(event) {
    const value = event.target.value;
    const actions = this.props.actions;
    this.setState({ graphql_data: this.fetchGraphQLData(actions, value) });
    this.setState({ show_villains: true, filter_villain_id: '' });
  }

  handleChange(event) {
    let value = event.target.value;
    const actions = this.props.actions;
    this.setState({ filter_villain_id: value });
    if ((value > 0) && (value < 11)) {
      this.setState({ graphql_data: this.fetchGraphQLData(actions, 'filter_by_id', value) });
      this.setState({ id_error: false, show_villains: true });
    }
    else {
      this.setState({ id_error: true, show_villains: false });
    }
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

  villainSingle(el) {
    let item = el;
    return (
      <div>
        {
          <div className="rows-villains">
            {item['image'] ? <img src={item['image']} /> : null}
            <div className="id">ID: {item['id']}</div>
            <div className="name">Name: {item['name']}</div>
            {item['age'] ? <div className="age">Age: {item['age']}</div> : null}
            {item['weight'] ? <div className="weight">Weight: {item['weight']}</div> : null}
            {item['description'] ? <div className="description">Description: {item['description']}</div> : null}
            {item['powers'] ? <div className="powers">Powers: {item['powers']}</div> : null}
            {item['first_appearance'] ? <div className="first_appearance">First Appearance: {item['first_appearance']}</div> : null}
          </div>
        }
      </div>
    );
  }

  render() {
    const graphql_data = this.props.graphql.data;
    //console.log('this.state is here ==> ', this.state);
    if (graphql_data === undefined || graphql_data === null) {
      return false;
    }

    const villains_data = graphql_data.hasOwnProperty('allVillains') ? this.villainRows(graphql_data.allVillains) : ' ';
    const villain_count = graphql_data.hasOwnProperty('totalVillains') ? 'Total Villains: ' + graphql_data.totalVillains : ' ';
    const villain_id_data = graphql_data.hasOwnProperty('villain') ? this.villainSingle(graphql_data.villain) : ' ';

    return (

      <div className="boxy float-left clearfix">

        <h4>GraphQL Client Query Component</h4>

        <p>This application shows custom queries which are fetching data from the GraphQL server located at <a href="http://localhost:8082/graphiql" target="_blank">http://localhost:8082/graphiql</a>.
        This data is also being stored within the Redux store state.</p> <br />

        <form>
          <button className="button" type="button" value="default" onClick={this.handleClick}>Show all Villain Summary</button>
          &nbsp;
        <button className="button" type="button" value="full_list" onClick={this.handleClick}>Show all Villain Properties</button>
          &nbsp;
        <button className="button" type="button" value="total_villains" onClick={this.handleClick}>Show Villain Count</button>
          &nbsp;
        <input className="filterid" type="text" placeholder="Filter by Villain ID (1-10)" value={this.state.filter_villain_id} onChange={this.handleChange} />
          {this.state.id_error ? 'Pick a valid ID number.' : ''}
        </form>

        {this.state.show_villains ?
          <div className="data-for-villans">
            {villains_data}
            {villain_count}
            {villain_id_data}
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
