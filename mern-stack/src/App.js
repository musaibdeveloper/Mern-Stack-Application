import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import User from './users/pages/user.jsx';
import Places from './places/pages/places.jsx';

function App() {
  return <Router>
    <Switch>
      <Route path="/user" >
        <User />
      </Route>
      <Route path="/places">
        <Places></Places>
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router >
}

export default App;
