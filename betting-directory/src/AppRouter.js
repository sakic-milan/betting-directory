import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes";
import MainLayout from "./Components/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {ROUTES["public"].map((route, i) => {
          let Page = route.component;
          return (
            <Route
              exact
              path={route.path}
              render={() => (
                <MainLayout>
                  <Page />
                </MainLayout>
              )}
              key={route.name}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default AppRouter;
