import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StartPage from '../../StartPage/StartPage';
import Game from '../../Game/Game';
import Settings from '../../Settings/Settings';
import Statistics from '../../Statistics/StatisticsPage';

export default function Switcher() {
  return (
    <Switch>
      <Route exact path='/' component={StartPage} />
      <Route path='/game'>
        <Game gamePrefield={false} />
      </Route>
      <Route path='/settings' component={Settings} />
      <Route path='/statistics' component={Statistics} />
      <Redirect path='*' to='/' />
    </Switch>
  );
}
