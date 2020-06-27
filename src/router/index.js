import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventsListing from "../views/EventsListing.vue";
import EventDetails from "../views/EventDetails.vue";
import RegisterFreeForm from "../components/RegisterFreeForm.vue";
import SummaryModal from "../components/SummaryModal.vue";
import PaymentForm from "../components/PaymentForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/events",
    name: "EventsListing",
    component: EventsListing
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true
  },
  {
    path: "/RegisterFreeForm",
    name: "RegisterFreeForm",
    component: RegisterFreeForm
  },
  {
    path: "SummaryModal",
    name: "SummaryModal",
    component: SummaryModal
  },
  {
    path: "PaymentForm",
    name: "PaymentForm",
    component: PaymentForm
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
