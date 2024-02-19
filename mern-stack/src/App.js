import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import MainNavigation from './shared/Navigation/MainNav/MainNavigation.jsx';
import User from './users/pages/user.jsx';
import Places from './places/pages/NewPlaces.jsx';
import UserPlaces from './places/pages/UserPlaces.jsx';

function App() {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/:userID/userplaces">
          <UserPlaces />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router >
}

export default App;
