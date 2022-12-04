import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/combat",
      name: "combat",
      component: () => import ("../views/CombatView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import ("../views/ProfileView.vue"),
    }
  ],
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/home', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem(import.meta.env.VITE_STORAGE_KEY);

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/home');
  } else {
    next();
  }
});

export default router;
