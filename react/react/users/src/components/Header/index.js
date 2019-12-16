import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default (props) => {
  console.log(props)
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>

    <nav> {
      props.data && props.data.map((item,id) => 
      <Link
      key={id}
      to = {item.path}
      >
        {item.title}
      </Link>
  )}
    </nav>
</React.Fragment >


  );
}

