import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import Home from './pages/Home';
import Landing from './pages/Landing';
import NewGame from './pages/NewGame';
import NewCharacter from './pages/NewCharacter';
import AdminHome from './pages/AdminHome';
import EditGame from './pages/EditGame';
import GameDetail from './pages/GameDetail';
import AdminGame from './pages/AdminGame';
import EditCharacter from './pages/EditCharacter';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/games/:id" component={GameDetail}/>
        <Route exact path="/admin/home" component={AdminHome} />
        <Route exact path="/admin/edit/:id" component={EditGame} />
        <Route exact path="/admin/newgame" component={NewGame} />
        <Route exact path="/admin/game/:id" component={AdminGame} />
        <Route exact path="/admin/game/:id/newCharacter" component={NewCharacter} />
        <Route exact path="/admin/game/:gameid/edit/:charid" component={EditCharacter} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
