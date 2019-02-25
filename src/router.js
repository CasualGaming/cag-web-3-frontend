import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ContactInfo from "./views/ContactInfo.vue";
import GameNights from "./views/GameNights.vue";

import Trondelan from "./components/Trondelan.vue";
import Studlan from "./components/Studlan.vue";
import ApplyToCag from "./components/ApplyToCag.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/studlan",
      name: "studlan",
      component: Studlan
    },
    {
      path: "/trondelan",
      name: "trondelan",
      component: Trondelan
    },
    {
      path: "/trondelan",
      name: "trondelan",
      component: Trondelan
    },
    {
      path: "/gameNights",
      name: "gameNights",
      component: GameNights
    },
    {
      path: "/contactInfo",
      name: "contactInfo",
      component: ContactInfo
    },
    {
      path: "/applyToCag",
      name: "applyToCag",
      component: ApplyToCag
    }
  ]
});
