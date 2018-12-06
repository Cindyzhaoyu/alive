import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import LoginPage from './page/login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    );
  }
}

export default App;
