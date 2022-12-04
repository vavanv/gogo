import * as R from 'ramda';

import { AnyAction } from 'src/store/types';
import { StopsState } from 'src/store/stops/types';

import { FETCH_STOP_LIST_ITEMS } from './actions';

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
    default:
      return state;
  }
};

export { reducer as stopListReducer };
