import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: () => import('./views/Home.vue')
    },
    {
      path: "/Game-modes",
      name: "game-modes",
      component: () => import('./views/Game-modes.vue')
    },
    {
      path: "/AllChampions",
      name: "all-champions",
      component: () => import('./views/AllChampions.vue')
    },
    {
      path: "/Champion/:championName",
      props: true,
      name: "champion",
      component: () => import('./views/Champion.vue')
    },
    {
      path: "/Items",
      name: "Items",
      component: () => import('./views/Items.vue')
    },
    {
      path: "/Login",
      name: "login",
      component: () => import('./views/Login.vue')
    },
    {
      path: "/Signup",
      name: "signup",
      component: () => import('./views/Signup.vue')
    },
  ]
})