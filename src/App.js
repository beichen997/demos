import React, { Component } from 'react';
import './App.css';

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <h1>App</h1>
      <ul>
      <li>
        <Link to="/layout/first">Home</Link>
      </li>
      <li>
        <Link to="/layout/second">User</Link>
      </li>
      <li>
      </li>
    </ul>

    </div>
    );
  }
}

export default App;
