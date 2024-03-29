import { createRequestTypes, asyncActionCreators } from 'src/utils/api/actions';

export const FETCH_ROUTE_LIST_ITEMS = createRequestTypes('FETCH_ROUTE_LIST_ITEMS');
export const fetchRouteListItemsAction = asyncActionCreators(FETCH_ROUTE_LIST_ITEMS);
