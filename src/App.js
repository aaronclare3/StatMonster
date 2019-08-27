import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Players from './components/players/Players';


import './App.css';
// import { Provider } from './context';

function App() {
  return (
    // <Provider>
      <Router>
        <React.Fragment>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Players} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    // </Provider>
  );
}

export default App;