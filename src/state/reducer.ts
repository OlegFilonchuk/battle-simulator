import { Reducer } from 'redux';
import { CREATE_SQUAD } from './AC';

const initialState = {
  squads: [],
};

const reducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SQUAD:
      return {
        ...state,
        squads: [...state.squads, payload.squad],
      };

    default:
      return state;
  }
};

export default reducer;
