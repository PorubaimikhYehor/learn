import React, { Component } from 'react';
import data from '../../data.txt';

import {
  ActiveUser,
  AddUserModal,
  SearchInput,
  UserList,
} from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      currentPage: 0,
      numbersUserOnPage: 15,
      isErrorUser: false,
      isShowAddUser: false,
    }
  };
  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then(data => {
        this.setState({
          defaultData: [...data],
          data,
          activeUser: data[0],
        });
        this.setNumbersOfPages(data);
      });
  };
  dataSlice = () => {
    const {
      data,
      currentPage,
      numbersUserOnPage,
    } = this.state;
    return data && data.slice(
      currentPage * numbersUserOnPage,
      currentPage * numbersUserOnPage + numbersUserOnPage);
  };
  setNumbersOfPages = (data) => {
    const {
      numbersUserOnPage
    } = this.state;
    this.setState({
      numbersOfPages: Math.ceil(data.length / numbersUserOnPage),
    });
  };
  changePage = (number) => {
    const {
      currentPage,
      numbersOfPages,
    } = this.state;
    currentPage + number >= 0 && currentPage + number < numbersOfPages &&
      this.setState({
        currentPage: this.state.currentPage + number,
      })
  };
  search = (e) => {
    console.log(e.target.value);
    const value = e.target.value.toLowerCase();
    const dataSearch = this.state.defaultData.filter((user) => {
      return user.name.toLowerCase().includes(value);
    });
    this.setState({
      data: dataSearch,
      currentPage: 0,
      activeUser: dataSearch[0]
    })
    this.setNumbersOfPages(dataSearch);
  }
  updateApp = (config) => {
    this.setState(config);
  };

  checkActiveUser = (user) => {
    const {
      activeUser
    } = this.state;
    if (user.activeUser.id === activeUser.id) {
      this.setState({ isErrorUser: true })
    } else {
      this.setState(user);
      this.setState({ isErrorUser: false })
    }
  }


  sort = (type) => {
    const {
      data
    } = this.state;
    const sorted = data.sort((a, b) => {
      return a[type] > b[type] ? 1 : -1;
    })
    this.setState({
      data: sorted,
    })
  }

  reset = () => {
    console.log('reset');
    this.setState({
      data: [...this.state.defaultData],
    })
  };

  render() {
    const {
      data,
      numbersOfPages,
      currentPage,
      isErrorUser,
      activeUser,
      isShowAddUser,
    } = this.state;

    const sortBtn = [
      {
        name: 'By name',
        onClick: () => this.sort('name'),
      },
      {
        name: 'By age',
        onClick: () => this.sort('age'),
      },
      {
        name: 'Reset',
        onClick: () => this.reset(),
      }
    ]
    // this.state.data && this.state.data.pop();
    // console.log(this.state);
    return (
      <div className='home' >
        <div className='wrapper' >
          <div className='home__search'>
            <SearchInput
              search={this.search}
              isError={data && (data.length === 0)}
            />
          </div>

          <div className='home__container'>
            <UserList
              // sort= {this.sort}
              sortBtn={sortBtn}
              numbersOfPages={numbersOfPages}
              currentPage={currentPage}
              changePage={this.changePage}
              dataLength={data && data.length}
              data={this.dataSlice()}
              updateApp={this.updateApp}
            />
            <AddUserModal
              updateApp={this.updateApp}
              isShowAddUser={isShowAddUser}
            />
            <ActiveUser
              user={activeUser}
              isErrorUser={isErrorUser}
            />
          </div>
        </div>
      </div>
    )
  }
}