// Core
import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
// Types
import { types } from './types';

const initialState = fromJS({
  modal: {
    isOpen: false,
    selection: '',
  },
});

export const donateReducer = createReducer(initialState, {
  [types.SET_IS_DONATE_MODAL_OPEN]: (state, action) => {
    const isOpen = action.payload;
    return state.setIn(['modal', 'isOpen'], isOpen);
  },

  [types.SET_DONATE_MODAL_SELECTION]: (state, action) => {
    const selection = action.payload;
    return state.setIn(['modal', 'selection'], selection);
  },
});
