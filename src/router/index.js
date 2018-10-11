import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export var router = new VueRouter({
  routes: [{
    path: '/workLicense',
    name: 'workLicense',
    component: resolve => require(['../pages/workLicense'], resolve)
  },{
    path: '/errorId',
    name: 'errorId',
    component: resolve => require(['../pages/errorId'], resolve)
  }
]
})