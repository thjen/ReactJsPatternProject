import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/404Page';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ActionPage from './pages/ActionPage/ActionPage';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage/>
  }, {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage/>
  }, {
    path: "/product/add",
    exact: false,
    main: ({history}) => <ActionPage history={history}/> // history to redirect when add success
  }, {
    path: "/product/:id/edit",
    exact: false,
    main: ({match, history}) => <ActionPage match={match} history={history}/> // match to get param on url
  }, {
    path: "",
    exact: false,
    main: () => <NotFound/>
  },
];

export default routes;
