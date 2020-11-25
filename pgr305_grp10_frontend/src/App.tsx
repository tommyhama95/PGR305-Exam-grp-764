import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

// Pages
import Home from './pages/Home';
import Landing from './pages/Landing';
import NewGame from './pages/NewGame';
import NewCharacter from './pages/NewCharacter';
import AdminHome from './pages/AdminHome';
import EditGame from './pages/EditGame';


function App() {
  return (
    <BrowserRouter> 
      <Switch style={{padding: 0}}>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/admin/home" component={AdminHome} />
        <Route exact path="/admin/editgame/:id" component={EditGame} />
        <Route exact path="/admin/newGame" component={NewGame} />
        <Route exact path="/admin/:gameid/newCharacter" component={NewCharacter} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
