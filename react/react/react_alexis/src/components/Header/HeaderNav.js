import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div className = 'nav'>
      {
        props.navList && props.navList.map (item => {
          return (
              <a href = 'home'>{item.name}</a>
          )
        })
      }
    </div>

  )
}