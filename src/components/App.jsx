import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Plant Diary</h1>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add_plant">Add plant</Link></li>
            <li><Link to="/view_plants">View plants</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
};
