import { combineReducers } from 'redux';
import cardReducers from './cardReducers';

export default combineReducers({
  cards: cardReducers
});
