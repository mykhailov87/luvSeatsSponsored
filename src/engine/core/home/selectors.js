// Core
import { List } from 'immutable';

const controller = 'home';

export const mainPostDataSelector = state => state.getIn([controller, 'mainPost', 'data'], List());
export const mainPostPendingSelector = state => state.getIn([controller, 'mainPost', 'pending'], false);
