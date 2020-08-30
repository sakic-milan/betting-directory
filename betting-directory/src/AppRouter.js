import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes";
import MainLayout from "./Components/MainLayout";
import NotFound from "./Components/NotFound";

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

        {
          <Route
            route="/"
            render={() => (
              <MainLayout>
                <NotFound />
              </MainLayout>
            )}
            key="notfound"
          />
        }
      </Switch>
    </Router>
  );
};

export default AppRouter;
