import { assoc } from 'ramda';

import { UINavBarState } from 'src/store/ui/nav-bar/types';
import { AnyAction } from 'src/store/types';
import { FETCH_STOP_LIST_ITEMS } from 'src/features/stops/actions';

export const initialState: UINavBarState = {
  loading: false,
};

const reducer = (state = initialState, action: AnyAction): UINavBarState => {
  switch (action.type) {
    case FETCH_STOP_LIST_ITEMS.REQUEST:
      return assoc('loading', true, state);
    case FETCH_STOP_LIST_ITEMS.SUCCESS:
    case FETCH_STOP_LIST_ITEMS.FAILURE:
      return assoc('loading', false, state);
    default:
      return initialState;
  }
};

export { reducer as uiNavBarReducer };
