import { FETCH_CARDS } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
