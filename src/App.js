import React, { Component } from 'react';
import './App.scss';
import Home from './container/Home';
import Pagelist from './container/Pagelist';
import Detail from './container/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pagelist" component={Pagelist} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
