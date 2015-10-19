import fetch from 'isomorphic-fetch';
import config from '../config';

const { BACKEND_URI } = config;

export default {
  get() {},

  post(name, age) {
    fetch(`${BACKEND_URI}/plants`, {
      method: 'post',
      body: { name, age },
    }).then((plant) => {
      console.log('plant', plant);
      return plant;
    })
  },

  put() {},

  delete() {},
}
