import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Store from 'src/store/create-store';
import Theme from './theme';

import { AppRoutes } from './routes';
import { IntlContainer } from '../../intl';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <ThemeProvider theme={Theme}>
          <IntlContainer>
            {/* CssBaseline kickstart an elegant, consistent,
              and simple baseline to build upon. */}
            <CssBaseline />
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </IntlContainer>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
