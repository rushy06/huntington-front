import './config/ReactotronConfig';
import './assets/css/tailwind.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, cyan, red, } from '@material-ui/core/colors';

import { store, persistor } from './store';
import Routes from './routes';
import Global from './styles/global';
import AuthProvider from '~/components/AuthProvider';
import Notifier from '~/components/Notifier';
import { primary } from '~/styles/colors';

const snackbarProviderOptions = {
  vertical: 'top',
  horizontal: 'right',
};

const theme = createMuiTheme({
  palette: {
    primary,
    secondary: red,
    error: red,
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <SnackbarProvider maxSnack={4} anchorOrigin={snackbarProviderOptions}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Notifier />
                <Routes />
              </BrowserRouter>
            </ThemeProvider>
          </AuthProvider>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
);
}

export default App;
