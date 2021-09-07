import React from 'react';
import Dashboard from 'pages/Dashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from 'pages/NotFound';
import ProductsList from 'pages/ProductsList';
import MainPage from 'pages/MainPage';
import Header from 'components/Header';
import FilterSection from 'components/Filters/FilterSection';

function AppRoutes() {
  return (
    <>
      <Header />
      <div className='page-content flex-center-colum' style={{ paddingTop: '2rem' }}>
        <Switch>
          <Route exact path='/admin-hidden'>
            <Dashboard />
          </Route>
          <Route exact path='/products/list'>
            <ProductsList />
          </Route>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/filters'>
            <FilterSection />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default AppRoutes;
