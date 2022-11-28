import { Routes, Route } from 'react-router-dom';
import { StopsPage } from '../../pages/stops-page';
import { TrainRoutes } from '../../pages/train-routes';
import { TrainRoutesOnLine } from '../../pages/train-routes-online';
import { ROUTE_ROOT, TRAIN_ROUTES, TRAIN_ROUTES_ONLINE } from '../../app/app/constants';

export const AppRoutes = () => (
  <>
    <Routes>
      <Route path={ROUTE_ROOT} element={<StopsPage />} />
      <Route path={TRAIN_ROUTES} element={<TrainRoutes />} />
      <Route path={TRAIN_ROUTES_ONLINE} element={<TrainRoutesOnLine />} />
    </Routes>
  </>
);
