import React from 'react';
import { connect } from 'react-redux';
import data from '../../data.txt';
import * as dataAction from '../../action/dataActions';
import * as components from '../../components';

class Home extends React.Component {
  state = {};


  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then(users => {
        this.props.initUsers(users)
      })
  };



  render() {
    // console.log(this.props);
    // var d = JSON.stringify(this.state.data);
    // console.log(d);
    // const ssss = d ? JSON.parse(d) : '' ;
    // console.log(ssss);

    return (
      <React.Fragment>
        <components.UserList
          users={this.props.users}
          deleteUser={this.props.deleteUser}
          showPhrase={this.props.showPhrase}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    users: state.data.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    initUsers: users => dispatch(dataAction.initUsers(users)),
    deleteUser: id => dispatch(dataAction.deleteUser(id)),
    showPhrase: id => dispatch(dataAction.showPhrase(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)