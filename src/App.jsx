import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Auth from './views/Auth';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp={true} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
