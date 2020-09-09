import React from 'react';

import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <SignUp />
      <GlobalStyle />
    </header>
  </div>
);

export default App;
