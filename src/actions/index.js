import { createAction } from 'redux-actions';
import uuid from 'node-uuid';
import Promise from 'bluebird';
import backend from '../services/backend';

export const addPlant = createAction('ADD_PLANT', backend.post);
