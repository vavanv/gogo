import { fetchHandler } from 'src/utils/api/request';
import { API_URLS } from 'src/utils/api/constants';

export const fetchTripTrainsListItems = (): Promise<void> => {
  const path = API_URLS.tripTrains;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
