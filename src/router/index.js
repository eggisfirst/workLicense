import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export var router = new VueRouter({
  routes: [{
    path: '/',
    name: 'workLicense',
    component: resolve => require(['../pages/workLicense'], resolve)
  }]
})