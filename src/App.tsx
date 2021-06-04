import React, { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from './style/Global'
// import Menu from "./components/Menu";
const Home = lazy(() => import("./views/Home"));
const First = lazy(() => import("./views/First"));

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Menu> */}
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/first" exact>
            <First />
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
