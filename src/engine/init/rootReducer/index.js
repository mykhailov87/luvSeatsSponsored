// Core
import { combineReducers } from 'redux-immutablejs';
// Reducers
import { homeReducer } from '../../core/home/reducer';
import { donateReducer } from '../../core/donate/reducer';

const rootReducer = () => combineReducers({
  home: homeReducer,
  donate: donateReducer,
});

export { rootReducer };
