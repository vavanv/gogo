import { combineReducers } from 'redux';

import { AppState } from 'src/store/types';
import {
  userCultureReducer,
  initialState as initialUserCultureState,
} from 'src/features/userCulture/reducer';
import { initialUIState, uiReducer } from 'src/store/ui/reducer';
import { initialState as initialStopList, stopListReducer } from 'src/features/stops/reducer';
import {
  initialState as initialShapeTraintsList,
  shapeTrainsListReducer,
} from 'src/features/shapes-trains/reducer';
import { initialState as initialRouteList, routeListReducer } from 'src/features/routes/reducer';
import {
  initialState as initialRouteSelected,
  routeSelectedReducer,
} from 'src/features/route-selected/reducer';
import {
  initialState as initialTrainTripsList,
  trainTripsListReducer,
} from 'src/features/train-trips/reducer';

export const initialState: AppState = {
  userCulture: initialUserCultureState,
  ui: initialUIState,
  stopList: initialStopList,
  shapeTrainsList: initialShapeTraintsList,
  routeList: initialRouteList,
  routeSelected: initialRouteSelected,
  trainTripsList: initialTrainTripsList,
};

export const rootReducer = combineReducers({
  userCulture: userCultureReducer,
  ui: uiReducer,
  stopList: stopListReducer,
  shapeTrainsList: shapeTrainsListReducer,
  routeList: routeListReducer,
  routeSelected: routeSelectedReducer,
  trainTripsList: trainTripsListReducer,
});
