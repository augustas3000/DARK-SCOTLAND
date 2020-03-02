import Vue from 'vue';
import Router from 'vue-router';
import FavouritePlaces from '@/views/FavouritePlaces';
import Home from '@/views/Home';
import HomeTest from '@/views/HomeTest.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favourite-places',
      name: 'favourite-places',
      component: FavouritePlaces
    }
  ]
})

export default router;
