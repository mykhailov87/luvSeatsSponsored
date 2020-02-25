// Core
import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
// Types
import { types } from '../../core/home/types';

const initialState = fromJS({
  mainPost: {
    data: [],
    pending: true,
  },
});

export const homeReducer = createReducer(initialState, {
  [types.SET_MAIN_POST_DATA]: (state, action) => {
    const data = action.payload;
    return state.setIn(['mainPost', 'data'], fromJS(data));
  },

  [types.SET_IS_MAIN_POST_DATA_LOADING]: (state, action) => {
    const isLoading = action.payload;
    return state.setIn(['mainPost', 'pending'], isLoading);
  },
});
