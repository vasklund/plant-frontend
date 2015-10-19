import React from 'react';
import { connect } from 'react-redux';

@connect((state) => ({ plants: state.plants }))
export default class ViewPlants extends React.Component {
  render() {
    console.log('this.props.plants', this.props.plants);
    return (
      <div>
        <h1>All plants</h1>
        <div>
          <ul>
            {this.props.plants.map((plant) => {
              return (
                <li key={plant.id}>{`${plant.name} (${plant.id}): ${plant.age}`}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};
