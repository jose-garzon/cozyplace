// ------------------------------ import libraries
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import { LandingPage } from '../pages/Landing';

const HomePage = lazy(() => import('../pages/Home'));
const InterestForm = lazy(() => import('../pages/InterestForm'));
const UserPage = lazy(() => import('../pages/UserPage'));
const ExperienceDetails = lazy(() =>
  import('../pages/ExperienceDetails'),
);
const ExperienceCreation = lazy(() =>
  import('../pages/ExperienceCreation'),
);
const NotFound = lazy(() => import('../pages/NotFound'));

// ------------------------------------ COMPONENT ------------------------------------//
// This is the router.
// This component has all the pages components

export const App = () => {
  const token = useSelector(
    (state) => state.userReducer.userData.token,
  );
  const validToken = token ? Object.keys(token).length > 0 : null;
  // {
  //   validToken ? HomePage : LandingPage;
  // }

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={validToken ? HomePage : LandingPage}
          />
          <Route
            exact
            path="/form"
            component={validToken ? InterestForm : NotFound}
          />
          <Route
            exact
            path="/user"
            component={validToken ? UserPage : NotFound}
          />
          <Route
            exact
            path="/experience/:id"
            component={ExperienceDetails}
          />
          <Route
            exact
            path="/create-experience"
            component={validToken ? ExperienceCreation : NotFound}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
