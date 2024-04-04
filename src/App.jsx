import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CalculatorProvider } from './calculatorProvider';
import Calculator from './calculator';
import Result from './result';

function App() {
  return (
    <Router>
      <CalculatorProvider>
        <Switch>
          <Route path="/" exact component={Calculator}/>
          <Route path="/result" component={Result} />
        </Switch>
      </CalculatorProvider>
    </Router>
  );
}

export default App;
