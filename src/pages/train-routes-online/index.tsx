import * as React from 'react';

import { MainContainer } from 'src/pages/main-container';
import { TrainRoutesOnLineForm } from './train-routes-online-form';

function TrainRoutesOnLineComponent() {
  return (
    <MainContainer>
      <TrainRoutesOnLineForm />
    </MainContainer>
  );
}

export const TrainRoutesOnLine = React.memo(TrainRoutesOnLineComponent);
