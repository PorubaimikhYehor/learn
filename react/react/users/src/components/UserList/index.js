import React from 'react';
import ItemUser from '../ItemUser/';
export default (props) => {
  return (
    <div className='userList'>
      <div
        className='userList__title'>
        <p>Users ({props.dataLength})</p>
        <button
          onClick = {() => props.updateApp({isShowAddUser: true})}
        >Add user</button>
        <div className= 'userList__sort'>
        <p>Sort</p>
          {
            props.sortBtn.map((item, id) => {
              return(
                <button 
                  key = {id}
                  className='button'
                  onClick = {item.onClick}
                >{item.name}</button>
              )
            })
          }
        </div>
      </div>
      

      <nav className = 'nav'>
        <button
          onClick = {(e) => {
            e.preventDefault();
            console.log('prev');
            props.changePage(-1);
          }}
        >Prev</button>
        <p>(page {props.currentPage + 1} from {props.numbersOfPages})  </p>
        <button
          onClick = {(e) => {
            e.preventDefault();
            console.log('next');
            props.changePage(1);
          }}
        >Next</button>      
      </nav>

      <div className='userList__container'>
        <div className='userList__avatar'>
          <p>Avatar</p> 
        </div>
        <p>Name</p>
        <p>Age</p>
        <p>Phone number</p>
      </div>
      {
        props.data && props.data.map((item, id) => {
          return(
            <ItemUser
              activeUser={props.activeUser}
              updateApp = {props.updateApp}
              key = {id}
              user = {item}
            />           
          )    
        })
      }
      <nav className = 'nav'>
        <button
          onClick = {(e) => {
            e.preventDefault();
            console.log('prev');
            props.changePage(-1);
          }}
        >Prev</button>
        <p>  (page {props.currentPage + 1} from {props.numbersOfPages})  </p>
        <button
          onClick = {(e) => {
            e.preventDefault();
            console.log('next');
            props.changePage(1);
          }}
        >Next</button>      
      </nav>

    </div>
  )
}