// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';

import { lazy, LazyExoticComponent } from "react"
import { NoLazy } from "../01-lazyload/pages/NoLazy";


type JSXComponent = () => JSX.Element;

interface Route {
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
}

// const LazyPage1 = lazy(() => import ( /*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(() => import ( /*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(() => import ( /*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

// const LazyLayout = lazy(() => import ( /*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        path: '/lazyload',
        component: lazy(() => import( /*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No lazy loading'
    },
    
    // {
    //     path: '/lazy1', component: LazyPage1, name: 'LazyPage-1'
    // },
    // {
    //     path: '/lazy2', component: LazyPage2, name: 'LazyPage-2'
    // },
    // {
    //     path: '/lazy3', component: LazyPage3, name: 'LazyPage-3'
    // }
]