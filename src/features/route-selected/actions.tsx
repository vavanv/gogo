import { Payload } from 'src/store/types';

export const SELECT_ROUTE = 'SELECT_ROUTE';
export const selectRouteAction = (payload: Payload) => ({
  type: SELECT_ROUTE,
  payload,
});
