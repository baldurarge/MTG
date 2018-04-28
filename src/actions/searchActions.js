import { FETCH_CARDS } from './types';

export const fetchCards = text => dispatch => {
  fetch('https://api.scryfall.com/cards/search?order=cmc&q=' + text)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_CARDS,
        payload: data.data
      });
    });
};
