import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as graphqlclientActions from '../actions/graphqlclientActions';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import * as actions from '../actions/graphqlclientActions';

/**
 * connect to redux
 * click actions show different results
 * update schema to something fun
 */

class GraphqlClientApp extends React.Component {

  constructor(props, store) {
    super(props, store);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      number: null,
      hamz: 0
    };

    // console.log('HEMMYO', graphql(graphqlclientActions.queryGraphQL()));
  }

  userRows(el) {
    return (
      <div>
        {
          el.map((item, index) => (
            <div key={index}>
              <div className="id">{item['id']}</div>
              <div className="name">{item['name']}</div>
            </div>
          ))
        }
      </div>
    );
  }

  componentDidMount() {
    const mount_actions = this.props.actions;
    // const ql = this.state.ql;
    mount_actions.loadGraphQL().then(function (obj) {
      return obj;
    }).then((response) => {
      console.log('response',response);
      // sw.api_base_data = response.starwars;
      // this.setState({
      //   sw
      // });
    }).catch(error => {
      throw (error);
    });
  }



  handleClick(event) {

    // console.log(this);

    // let hamburgers = graphql(gql`
    //     query {
    //       allUsers {
    //         id
    //         name
    //       }
    //       totalUsers
    //     }
    // `);

    // let e = event.target.value;
    this.setState({ number: 'x' });

    console.log('this.stateZ =====> ', );

    // this.props.actions.graphqlclientActions.createGraphQL('CREATE_GRAPHQL'); // update store
  }

  render() {
    const data = this.props;
    console.log('data ==> ', data);

    // const userdata = (data.totalUsers) ? this.userRows(data.allUsers) : ' ';

    return (
      <div>

        <input className="button" type="button" value="A" onClick={this.handleClick} />
        <input className="button" type="button" value="B" onClick={this.handleClick} />

        <hr />
        {/* // {data.totalUsers}
        // {userdata} */}
      </div>

    );
  }
}


// export default graphql(gql`
//   query {
//     allUsers {
//       id
//     }
//     totalUsers
//   }
// `)(GraphqlClientApp);

// StarWarsApp.propTypes = {
//   // starwars: PropTypes.object,
//   actions: PropTypes.object.isRequired
// };

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







/*

(
  graphql(gql`
    query {
      allUsers {
        id
        name
      }
      totalUsers
    }
`)
*/

// export default connect(mapStateToProps, MapDispatchToProps)(
//   graphql(gql`
//     query {
//       allUsers {
//         id
//       }
//     }
// `)(GraphqlClientApp));
