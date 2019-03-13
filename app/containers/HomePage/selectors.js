/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const fetchResponse = () =>
  createSelector(selectHome, homeState => homeState.get('response'));

export { selectHome, makeSelectUsername, fetchResponse };
