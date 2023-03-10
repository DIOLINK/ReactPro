import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyLoad',
    component: lazy(
      () => import(/*webpackChunkName: "LazyLoad"*/ '../01-lazyload/layout/LazyLayout'),
    ),
    name: 'LazyLoad',
  },
  {
    to: '/NoLazy',
    path: '/NoLazy',
    component: NoLazy,
    name: 'No Lazy Loading',
  },
];
