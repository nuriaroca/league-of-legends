import Vue from 'vue'
import Router from 'vue-router'
import firebase from "firebase"

Vue.use(Router)

const router = new Router({
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
      path: "/Chat",
      name: "chat",
      component: () => import('./views/Chat.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('chat');
  else next();
});

export default router;