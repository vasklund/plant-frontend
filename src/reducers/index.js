import { bindActionCreators, combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';

const handlePlants = handleActions({
  ADD_PLANT: (plants, { payload }) => ([...plants, payload]),
}, []);

export default combineReducers({
  router: routerStateReducer,
  plants: handlePlants,
});
