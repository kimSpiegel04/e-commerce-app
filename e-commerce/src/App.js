import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const BonsaiPage = () => (
  <div>
    <h1>BONSAI TREES </h1>
  </div>
)

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/bonsai' component={BonsaiPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
