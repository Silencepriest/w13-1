import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Main from './components/Main';
import RepositoryDetails from './components/RepositoryDetails';
import RepositoryList from './components/RepositoryList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/:userName"><RepositoryList /></Route>
        <Route exact path="/:userName/:repoName"><RepositoryDetails /></Route>
      </Switch>
      
    </div>
  );
}

export default App;
