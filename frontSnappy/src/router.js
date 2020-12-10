import Vue from "vue";
import VueRouter from 'vue-router'

import Crud from "./components/Crud";
import Grafico from "./components/Grafico";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "crud",
    component: Crud
  },
  {
    path: "/graficos",
    name: "grafico",
    component: Grafico 
  },
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;