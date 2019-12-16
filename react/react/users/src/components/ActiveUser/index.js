import React from 'react';

export default props => {
  const user = props.user ? props.user : '';
  return (
    <React.Fragment>
      {props.isErrorUser ? (
        <p className = 'error'>
          Виберіть іншого
        </p>
      ) :

        <div 
          className='activeUser'
        >
          <div className = 'activeUser__image' >
            <img src = {user.image} alt = 'ava'/>
          </div>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.phrase}</p>
        </div>
      }
    </React.Fragment>
      
  )
}