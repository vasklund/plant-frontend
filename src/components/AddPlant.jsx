import React from 'react';
import { connect } from 'react-redux';
import { addPlant } from '../actions';

@connect(null, { addPlant })
export default class AddPlant extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="name" placeholder="plant name" />
        <input type="text" ref="age" placeholder="plant age" />
        <button onClick={() => this.props.addPlant(this.refs.name.value, this.refs.age.value)}>save new plant</button>
      </div>
    );
  }
};
