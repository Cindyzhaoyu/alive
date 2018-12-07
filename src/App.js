import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import LoginPage from './page/login.js';
import ListPage from './page/alive-list.js';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <div>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/alive/list" exact component={ListPage} />
        </div>
      </Switch>
    );
  }
}

export default App;
