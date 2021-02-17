import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import Header from './components/Navigation/Header';
// eslint-disable-next-line import/no-cycle
import Profile from './containers/Profile';
import Loader from './components/Loader';
import NotFoundPage from './containers/NotFound/notFoundPage.component';
import Footer from './components/Footer/Footer.js';

// export const handlerUserContext = createContext(null);
function App() {
  const [userName, setUserName] = useState('');
  const { isAuthenticated, isLoading } = useAuthentication();
  if (isLoading) return <Loader />;
  return (
    <Router>
      {location.pathname === '/sign-in' ||
      location.pathname === '/sign-up' ? null : (
        <Header isAuthenticated={isAuthenticated} username={userName} />
      )}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />
        <AuthenticatedRoute
          exact
          path="/profile"
          isAuthenticated={isAuthenticated}
        >
          {/* <handlerUserContext.Provider value={{ userName, setUserName }}> */}
            <Profile setUserName={setUserName}/>
          {/* </handlerUserContext.Provider> */}
        </AuthenticatedRoute>
        <Route path="*" component={NotFoundPage} />
      </Switch>
      {location.pathname === '/sign-in' ||
      location.pathname === '/sign-up' ? null : (
        <Footer />
      )}
    </Router>
  );
}

export default App;
