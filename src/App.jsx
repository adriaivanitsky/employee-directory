import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route>
            <Home exact path="/" />
          </Route>
          <Route>
            <Auth path="/login" />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}
