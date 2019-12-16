import React from 'react';

export default  (props) => { 
  return  (
    props.isShowAddUser && 
    <form className ='addUser'>
      <p>Add user</p>
      <input 
        placeholder = 'First Name'
      />
      <input 
        placeholder = 'Last Name'
      />
      <input 
        placeholder = 'Age'
      />
      <input 
        placeholder = 'Phone number'
      />
      <input 
        placeholder = 'Image'
      />
      <textarea 
        placeholder = 'Phrase'
        rows = '4'
      />
      
      <div className = 'btn'>
        <input 
          type = 'reset'
          onClick = {() => props.updateApp({isShowAddUser: false})}
        />
        <input 
          type = "submit"
        />
      </div>    
    </form>
  )
}
