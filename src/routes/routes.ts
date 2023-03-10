import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const Lazy1 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPages1'),
);
const Lazy2 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPages2'),
);
const Lazy3 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPages3'),
);

export const routes: Route[] = [
  {
    to: '/lazy-1',
    path: '/lazy-1',
    component: Lazy1,
    name: 'lazy-1',
  },
  {
    to: '/lazy-2',
    path: '/lazy-2',
    component: Lazy2,
    name: 'lazy-2',
  },
  {
    to: '/lazy-3',
    path: '/lazy-3',
    component: Lazy3,
    name: 'lazy-3',
  },
];
