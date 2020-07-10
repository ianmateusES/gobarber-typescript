import React from 'react';

import GlobalStyle from './styles/global';

import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';

const App: React.FC = () => (
  <>
    <SingIn />
    <GlobalStyle />
  </>
);

export default App;
