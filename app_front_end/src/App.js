import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={}/> */}
        </Switch> 
      </BrowserRouter>
    </div>
  );
}
export default App;
