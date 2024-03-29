import * as R from 'ramda';

import { AnyAction } from 'src/store/types';
import { TrainTripsState } from 'src/store/train-trips/types';
import { FETCH_TRAIN_TRIPS_LIST_ITEMS } from './actions';

export const initialState: TrainTripsState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction): TrainTripsState => {
  switch (action.type) {
    case FETCH_TRAIN_TRIPS_LIST_ITEMS.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_TRAIN_TRIPS_LIST_ITEMS.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as trainTripsListReducer };
