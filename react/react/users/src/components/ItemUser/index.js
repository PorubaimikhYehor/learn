import React from 'react';

export default (props) => {
  return (
    <div 
      className='userList__container'
      onClick = {() => {props.updateApp({activeUser: props.user});
      }}
    >
      <div className='userList__avatar'>
        <img src={props.user.image} alt='ava'/> 
      </div>
      <p>{props.user.name}</p>
      <p>{props.user.age}</p>
      <p>{props.user.phone}</p>
    </div>
  )
}