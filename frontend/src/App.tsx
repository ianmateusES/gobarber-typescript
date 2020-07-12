import React from 'react';

import GlobalStyle from './styles/global';

import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SingIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
