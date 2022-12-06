import { fetchHandler } from 'src/utils/api/request';
import { API_URLS } from 'src/utils/api/constants';

export const fetchShapeTrainsListItems = (): Promise<void> => {
  const path = API_URLS.shapes;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
