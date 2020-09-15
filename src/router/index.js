import Vue from "vue";
import VueRouter from "vue-router";
import egivesoft from "@/page/egivesoft.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/index/home'
  },
  {
    path: "/index",
    name: "egivesoft",
    component: egivesoft,
    children: [
      {
        path: "/index/home",
        name: "home",
        component: () =>
            import( "../page/home.vue"),
      },
      {
        path: "/index/about",
        name: "about",
        component: () => import( "@/page/about.vue"),
      },
      {
        path: "/index/together",
        name: "about",
        component: () => import( "@/page/together.vue"),
      }
    ]
  },
  {
    path: "/aboutOld",
    name: "aboutOld",
    component: () =>
        import( "../page/aboutOld.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
