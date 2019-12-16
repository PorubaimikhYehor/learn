import React, { Component } from 'react';

import data from '../../data.txt';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/dataAction';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then(data => {
        // this.setState({
        //   defaultUsers: [...data],
        //   data,
        // });
        this.props.pushData(data);
      })
  }

  userList = () => {
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <p>Avatar</p>
        </div>
        <div className='col-sm-3'>
          <p>Name</p>
        </div>
        <div className='col-sm-2'>
          <p>Age</p>
        </div>
        <div className='col-sm-3'>
          <p>Phone</p>
        </div>
        <div className='col-sm-1'>
          <p>Delete</p>
        </div>
      </div>
    )
  };

  list = (data) => {


    return (
      data.length > 0 && data.map((item, id) => {
        return (
          <div
            className='row'
            key={id}
          >
            <div className='col-sm-3'>
              <p>Avatar</p>
            </div>
            <div className='col-sm-3'>
              <p>{item.name}</p>
            </div>
            <div className='col-sm-2'>
              <p>{item.age}</p>
            </div>
            <div className='col-sm-3'>
              <p>{item.phone}</p>
            </div>
            <div className='col-sm-1'>
              <p>Delete</p>
            </div>
          </div>
        )
      })
    )
  };



  render() {
    console.log(this.props.data);

    return (
      <div className='home'>
        {
          this.userList()
        }
        {
          this.list(this.props.data)
        }

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    pushData: data => dispatch(dataAction.pushData(data)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);