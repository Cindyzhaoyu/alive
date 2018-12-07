import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import LoginPage from './page/login.js';
import ListPage from './page/alive-list.js';
import AliveRoom from './page/alive-room.js';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <div className="page">
          <Route path="/login" exact component={LoginPage} />
          <Route path="/alive/list" exact component={ListPage} />
          <Route path="/alive/room" exact component={AliveRoom} />
        </div>
      </Switch>
    );
  }
}

export default App;
