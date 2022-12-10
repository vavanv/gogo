import { fetchHandler } from 'src/utils/api/request';
import { API_URLS } from 'src/utils/api/constants';

export const fetchRouteListItems = (): Promise<void> => {
  const path = API_URLS.routes;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
