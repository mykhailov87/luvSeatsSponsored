const controller = 'donate';

export const isDonateModalOpenSelector = state => state.getIn([controller, 'modal', 'isOpen'], false);
export const donateModalSelectionSelector = state => state.getIn([controller, 'modal', 'selection'], '');
