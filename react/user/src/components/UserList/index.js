import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div className='container'>
      <div className='row'>
        <p className='col-3'>image</p>
        <p className='col-3'>name</p>
        <p className='col-3'>phone</p>
        <p className='col-2'>age</p>
      </div>
      {
        props.users && props.users.map((item, id) => {
          // console.log(id);
          const {
            image,
            name,
            phone,
            age,
            phrase,
            isShowPhrase,
          } = item;
          // console.log(isShowPhrase);
          return (
            <React.Fragment
              key={id}
            >
              <div
                onClick={() => props.showPhrase(id)}
                className='row table table-bordered'>
                <div className='col-3'>
                  <img
                    width='50%'
                    src={image}
                    alt='sss'
                  />
                </div>
                <p className='col-3'>{name}</p>
                <p className='col-3'>{phone}</p>
                <p className='col-2'>{age}</p>
              </div>
              {
                isShowPhrase && 
                <p>{phrase}</p>
              }
              <button
                onClick={() => props.deleteUser(id)}
                className='btn btn-danger'
              >
                DLT
              </button>
            </React.Fragment>

          )
        })
      }
    </div>
  )
}