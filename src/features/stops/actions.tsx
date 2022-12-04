import { createRequestTypes, asyncActionCreators } from 'src/utils/api/actions';

export const FETCH_STOP_LIST_ITEMS = createRequestTypes('FETCH_STOP_LIST_ITEMS');
export const fetchStopListItemsAction = asyncActionCreators(FETCH_STOP_LIST_ITEMS);
