import { UserCultureState } from 'src/store/userCulture/types';
import { UIState } from 'src/store/ui/types';
import { StopsState } from 'src/store/stops/types';
import { ShapesTrainsState } from 'src/store/shapes/types';
import { RoutesState, RouteSelectedState } from 'src/store/routes/types';
import { TrainTripsState } from 'src/store/train-trips/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Payload = any;

export interface AppState {
  userCulture: UserCultureState;
  ui: UIState;
  stopList: StopsState;
  shapeTrainsList: ShapesTrainsState;
  routeList: RoutesState;
  routeSelected: RouteSelectedState;
  trainTripsList: TrainTripsState;
}

export interface AnyAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  payload?: Payload;
  error?: string;
}

export interface RequestAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

export interface SuccessAction {
  type: string;
  payload: Payload;
}

export interface FailureAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

export interface AsyncActions {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}
