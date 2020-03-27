import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
