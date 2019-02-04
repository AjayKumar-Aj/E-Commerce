/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Authentication from 'containers/Authentication/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TopBar from 'components/TopBar';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Signup from 'components/Signup';
import Homepage from 'components/Homepage';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Homepage" component={Homepage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
