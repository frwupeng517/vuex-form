import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/all'
import Done from '@/components/done'
import Undo from '@/components/undo'
import Delete from '@/components/delete'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'All',
      component: All
    },
    {
      path: '/done',
      name: 'Done',
      component: Done
    },
    {
      path: '/undo',
      name: 'Undo',
      component: Undo
    },
    {
      path: '/delete',
      name: 'Delete',
      component: Delete
    }
  ]
})
