import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <SignIn />
      <GlobalStyle />
    </header>
  </div>
);

export default App;
