import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';


function App() {
  return (
    <BrowserRouter> 
      <Switch style={{padding: 0}}>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
