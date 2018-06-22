import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = (r) => require.ensure([], () => r(require('core/ui/layout/Layout')), 'Layout')
const helloWorld = (r) => require.ensure([], () => r(require('pages/HelloWorld')), 'HelloWorld')

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/

export const constantRouterMap = [
  { path: '/hello', component: helloWorld, hidden: true },
  { path: '/login', component: (r) => require.ensure([], () => r(require('pages/login/Login')), 'Login'), hidden: true },
  { path: '/authredirect', component: (r) => require.ensure([], () => r(require('pages/login/AuthRedirect')), 'AuthRedirect'), hidden: true },
  { path: '/404', component: (r) => require.ensure([], () => r(require('pages/errorPage/404')), '404'), hidden: true },
  { path: '/401', component: (r) => require.ensure([], () => r(require('pages/errorPage/401')), '401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: helloWorld,
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  { path: '*', redirect: '/', hidden: true }
]
