import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import SignIn from "./components/Signin"
import SignUp from "./components/Signup"

const generateClassName = createGenerateClassName({
  productionPrefix: 'aa',
});

export default ({ history, signIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch >
            <Route path="/auth/signin">
              <SignIn signIn={signIn}/>
            </Route>
            <Route path="/auth/signup">
            <SignUp signIn={signIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
