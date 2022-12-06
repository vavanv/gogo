import { fetchHandler } from 'src/utils/api/request';
import { API_URLS } from 'src/utils/api/constants';

export const fetchStopListItems = (): Promise<void> => {
  const path = API_URLS.stops;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
