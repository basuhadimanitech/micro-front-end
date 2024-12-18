import React, {lazy, Suspense, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';

const MarketingLazyComponent = lazy(() => import ("./components/MarketingApp"));
const AuthLazyComponent = lazy(() => import ("./components/AuthApp"));


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [signIn, setSignIn]  = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Header signIn={signIn} setSignIn={(value) => setSignIn(value)}/>
          <AuthLazyComponent onSignIn={(value) => setSignIn(value)}/>
            <Switch>
              <Route exact path="/">
              <MarketingLazyComponent />
              </Route>
            </Switch>
        </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
