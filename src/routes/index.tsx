import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard';
import { ErrorBoundary } from '../components/reusable/ErrorBoundary';
import { Layout } from '../components/layout';
import MainBody from '../components/reusable/MainWrappers/MainBody';
import LoadingPage from '../pages/LoadingPage';
import { NoMatch } from '../pages/NoMatch';
import * as routes from './constants';
import About from '../components/about';
import Contact from '../components/contact';
import Login from '../components/login';

interface Props {
  children: React.ReactNode;
}
const HOC = ({ children }: Props) => {
  return (
    <Layout>
      <MainBody>{children}</MainBody>
    </Layout>
  );
};

export const Navigation = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route
            path={routes.ROOT}
            element={
              <HOC>
                <Dashboard />
              </HOC>
            }
          />
          <Route
            path={routes.ABOUT_US}
            element={
              <HOC>
                <About />
              </HOC>
            }
          />
          <Route
            path={routes.CONTACT_US}
            element={
              <HOC>
                <Contact />
              </HOC>
            }
          />
          <Route
            path={routes.LOGIN}
            element={
              <HOC>
                <Login />
              </HOC>
            }
          />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
