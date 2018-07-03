import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/form'
import Result from '../components/result'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
