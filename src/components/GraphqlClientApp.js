import React from 'react';
//import { connect } from 'react-redux';
// import { connect } from 'react-apollo'; // NOTE: different connect!
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class GraphqlClientApp extends React.Component {

  constructor(props) {
    super(props);
  }


  userRows(el) {
    return (
      <div>
        {
          el.map((item, index) => (
            <div key={index}>
              <div className="id">{item['id']}</div>
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    const data = this.props.data;
    console.log('data => ', data);

    const userdata = (data.totalUsers) ? this.userRows(data.allUsers) : ' ';

    return (
      <div>
        { data.totalUsers }
        { userdata }
      </div>

    );
  }
}

// export default GraphqlClientApp;

// const mapQueriesToProps = ({ ownProps, state }) => {
//   return {
//     data: {
//       query: gql`query { allUsers { id } totalUsers } }`
//     }
//   };
// };

// export default connect({
//   mapQueriesToProps
// })(GraphqlClientApp);


// function TodoApp({ data: { todos } }) {
//   return (
//     <ul>
//       {todos.map(({ id, text }) => (
//         <li key={id}>{text}</li>
//       ))}
//     </ul>
//   );
// }


export default graphql(gql`
  query {
    allUsers {
      id
    }
    totalUsers
  }
`)(GraphqlClientApp);
