// Helpers
import { actionCreator } from '../../../../libs/helpers/actionCreator';
// Types
import { asyncTypes } from './asyncTypes';

export const asyncActions = Object.freeze({
  getMainPostAsync() {
    return actionCreator(asyncTypes.GET_MAIN_POST_DATA_ASYNC);
  },
});
