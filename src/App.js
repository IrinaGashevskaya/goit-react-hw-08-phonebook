import { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import AppBar from "./components/AppBar/AppBar";
import LoaderApp from "./components/Loader/Loader";

import { authOperations } from "./redux/auth";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-view" */)
);

const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "register-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /* webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "contacts-view" */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <hr></hr>
      <Suspense fallback={<LoaderApp />}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
