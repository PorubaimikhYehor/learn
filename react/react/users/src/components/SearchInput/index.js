import React from 'react';

export default (props) => { 

  return (
    <div className='searchInput' >
      <input
        placeholder = 'Search user'
        className = 'searchInput__input'
        onChange = {props.search}
      />
    {
      props.isError &&
      (<div className='error'>
        Not Users
      </div>)
    }
    </div>
    
  );
}