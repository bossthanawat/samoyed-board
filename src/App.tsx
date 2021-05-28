import React, { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";
import { Route, Switch } from "react-router-dom";
// import Menu from "./components/Menu";
const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <>
      {/* <Menu> */}
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* 404 */}
          <Route component={Home} />
        </Switch>
      </Suspense>
      {/* </Menu> */}
    </>
  );
}

export default App;
