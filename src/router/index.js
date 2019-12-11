import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Photos from '../views/Photos.vue';
import Popular from '../views/Popular.vue';
import People from '../views/People.vue';
import Nature from '../views/Nature.vue';
import Buildings from '../views/Buildings.vue';
import Search from '../views/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos
  },
  {
    path: '/popular',
    name: 'popular',
    component: Popular
  },
  {
    path: '/people',
    name: 'people',
    component: People
  },
  {
    path: '/buildings',
    name: 'buildings',
    component: Buildings
  },
  {
    path: '/nature',
    name: 'nature',
    component: Nature
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
];

const router = new VueRouter({
  routes
});

export default router;
