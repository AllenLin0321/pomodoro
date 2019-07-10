import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard';
import Todolist from './components/Dashboard/Todolist'
import Analytics from './components/Dashboard/Analytics'
import Ringtones from './components/Dashboard/Ringtones'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      component: Dashboard,
      redirect: '/dashboard/todolist',
      children: [{
          path: 'todolist',
          component: Todolist,
          meta: {
            page: 'todolist'
          }
        },
        {
          path: 'analytics',
          component: Analytics,
          meta: {
            page: 'analytics'
          }
        },
        {
          path: 'ringtones',
          component: Ringtones,
          meta: {
            page: 'ringtones'
          }
        }
      ]
    }
  ]
})
