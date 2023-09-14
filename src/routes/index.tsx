import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard';
import { ErrorBoundary } from '../components/reusable/ErrorBoundary';
import { Layout } from '../components/layout';
import MainBody from '../components/reusable/MainWrappers/MainBody';
import LoadingPage from '../pages/LoadingPage';
import { NoMatch } from '../pages/NoMatch';
import * as routes from './constants';
import Login from '../pages/Login';
import Services from '../pages/Services';
// import useAuth from '../hooks/useAuth';
import Home from '../components/Home/Home';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

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
  // const { token, login, logout } = useAuth();
  const { userData } = useSelector((state: RootState) => state.auth);

  console.log('token', userData?.token);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <HOC>
          <Routes>
            <Route path={routes.ROOT} element={<Home />} />
            {userData?.token ? (
              <>
                <Route path={routes.LOGIN} element={<Navigate to={routes.DASHBOARD} />} />
                <Route path={routes.SIGNUP} element={<Navigate to={routes.DASHBOARD} />} />
                <Route path={routes.DASHBOARD} element={<Dashboard />} />
                <Route path={routes.SERVICES('accounting')} element={<Services />} />
                <Route path={routes.SERVICES('it-returns')} element={<Services />} />
                <Route path={routes.SERVICES('trading')} element={<Services />} />
                <Route path='*' element={<NoMatch />} />
              </>
            ) : (
              <Route path='*' element={<Login />} />
            )}
            {/* <Route path='*' element={<NoMatch />} /> */}
          </Routes>
        </HOC>
      </Suspense>
    </ErrorBoundary>
  );
};
