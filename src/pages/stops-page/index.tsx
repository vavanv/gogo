import * as React from 'react';

import { MainContainer } from 'src/pages/main-container';
import { StopsForm } from 'src/pages/stops-page/stops-form';

function StopsPageComponent() {
  return (
    <MainContainer>
      <StopsForm />
    </MainContainer>
  );
}

export const StopsPage = React.memo(StopsPageComponent);
