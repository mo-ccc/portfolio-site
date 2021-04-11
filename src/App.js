import { Switch, Route, Redirect, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>home</h1>
        </Route>
        <Route exact path="/about">
          <h1>about</h1>
        </Route>
        <Route exact path="/projects">
          <h1>projects</h1>
        </Route>
        <Route exact path="/404">
          <h1>404</h1>
        </Route>
        <Route>
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
