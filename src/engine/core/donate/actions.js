// Helpers
import { actionCreator } from '../../../libs/helpers/actionCreator';
// Types
import { types } from './types';

export const actions = Object.freeze({
  setIsModalOpen(isOpen) {
    return actionCreator(types.SET_IS_DONATE_MODAL_OPEN, isOpen);
  },
  setSelection(selection) {
    return actionCreator(types.SET_DONATE_MODAL_SELECTION, selection);
  },
});
