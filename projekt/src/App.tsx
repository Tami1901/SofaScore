import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import login from "./pages/login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
