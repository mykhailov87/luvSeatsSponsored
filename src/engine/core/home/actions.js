// Helpers
import { actionCreator } from '../../../libs/helpers/actionCreator';
// Types
import { types } from './types';

export const actions = Object.freeze({
  setMainPostData(data) {
    return actionCreator(types.SET_MAIN_POST_DATA, data);
  },
  setIsMainPostDataLoading(isLoading) {
    return actionCreator(types.SET_IS_MAIN_POST_DATA_LOADING, isLoading);
  },
});
