/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_USERNAME, STORE_RESPONSE } from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  response: {},
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    case STORE_RESPONSE:
      console.log('reducer');
      return state.set('response', action.payload);
    default:
      return state;
  }
}

export default homeReducer;
