import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadStarWars } from '../actions/starwarsActions';
/*eslint-disable no-console */

class StarWarsApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    // this.onNameChange = this.onNameChange.bind(this);
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
    this.onAPIChange = this.onAPIChange.bind(this);
    console.log('props', this.props);
    this.state = {
      sw: {
        api_selected: props,
        // name: null,
        // title: null
      }
    };
  }

  // componentWillMount() {
  //   const starwars = this.state.starwars;
  //   console.log(this.state);
  //   console.log(this.props);
  //   //starwars.api_list = true;
  //   this.setState({
  //     starwars
  //   });
  //   console.log('* * componentWillMount * * * * ', store.dispatch(loadStarWars()));
  // }

  componentDidMount() {

    // this.props.then(
    //   res => this.setState({ api_list: 'd' })
    // );

    //let hello = this.props.loadStarWars;
    //  starwars.api_list = this.props.loadStarWars();
    console.log('___>', this.props);
    // const sw = this.state.sw;
    // this.setState({
    //   sw
    // });


    //if (this.props.starwars[0] == '') {
    // console.log(this.state);
    // console.log(this.props);
    // this.props.loadStarWars;
    // this.setState({
    //        starwars
    //   });
    //}
  }

  onAPIChange(event) {
    const sw = this.state.sw;
    console.log(event.target.value);
    sw.api_selected = event.target.value;
    this.setState({
      sw
    });
    console.log('onAPIChange() =>', this.state);
  }

  // onNameChange(event) {
  //   const starwars = this.state.starwars;
  //   starwars.name = event.target.value;
  //   this.setState({
  //     starwars
  //   });
  // }

  // onTitleChange(event) {
  //   const starwars = this.state.starwars;
  //   starwars.title = event.target.value;
  //   this.setState({
  //     starwars
  //   });
  // }



  // onClickSave() {
  //   console.log('+>', this.props);
  //   // loadStarWars('https://swapi.co/api/people/');
  //   // this.props.actions.
  //   // store.dispatch(loadStarWars());
  //   // starwarsActions.loadStarWars();
  //   // this.props.actions.
  //   // starwarsActions.loadStarWars(); // this.state.starwars
  // }

  starwarsRow(starwars, index) { //
    // console.log('userRow', user);
    return <div key={index}>name: {starwars.name} <br /> title: {starwars.title}</div>;
  }

  render() {

    // console.log('this.stateZZ',this.props.starwars);
    //   const listItems = this.state.map((el) =>
    //   <li>{el}</li>
    // );

    if (this.props.starwars.length !== 0) {

      console.log('______', this.props.starwars);
      const api_list = this.props.starwars;
      const api_selects = Object.keys(api_list).map(function (k, i) {
        return <option key={i} value={api_list[k]}>{k}</option>;
      });

      // onLoad={api_list[Object.keys(api_list)[0]]}
      return (
        <div>
          <select onChange={this.onAPIChange}>
            {api_selects}
          </select>

          {/* <input placeholder="Type Name" onChange={this.onNameChange} value={this.props.starwars.name} type="text" />
          <input placeholder="Type Title" onChange={this.onTitleChange} value={this.props.starwars.title} type="text" />
          <input onClick={this.onClickSave} type="submit" value="fetch api" /> */}

          {/* {<span className="starwars-list">{this.props.starwars.map(this.starwarsRow)}</span>} */}

        </div>
      );

    }
    else {
      return null;
    }

  }
}

// StarWarsApp.propTypes = {
//   starwars: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    starwars: state.starwars
  };
}

function MapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loadStarWars, dispatch)
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(StarWarsApp);
