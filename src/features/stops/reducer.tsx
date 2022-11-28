import * as R from 'ramda';

import { AnyAction } from '../../store/types';
import { StopsState } from '../../store/stops/types';

import { FETCH_STOP_LIST_ITEMS, SHOW_STOPS } from './actions';
import { actions } from './constants';

export const initialState: StopsState = {
  items: [],
  selectedItems: [],
};

const reducer = (state = initialState, action: AnyAction): StopsState => {
  switch (action.type) {
    case FETCH_STOP_LIST_ITEMS.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_STOP_LIST_ITEMS.FAILURE:
      return initialState;
    case SHOW_STOPS: {
      const payload = action.payload;
      let filteredList;
      switch (payload) {
        case actions.ALL:
          filteredList = state.items.filter(f => f.isTrain || f.isBus);
          return R.assoc('selectedItems', filteredList, state);
        case actions.BUSES:
          filteredList = state.items.filter(f => f.isBus);
          return R.assoc('selectedItems', filteredList, state);
        case actions.TRAINS:
          filteredList = state.items.filter(f => f.isTrain);
          return R.assoc('selectedItems', filteredList, state);
        default:
          return R.assoc('selectedItems', [], state);
      }
    }
    default:
      return state;
  }
};

export { reducer as stopListReducer };
