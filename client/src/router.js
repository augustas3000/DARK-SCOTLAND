import Vue from 'vue';
import Router from 'vue-router';
import FavouritePlaces from '@/views/FavouritePlaces';
import Home from '@/views/Home';
import PlacesFilter from '@/views/PlacesFilter';
import AddANewPlace from '@/views/AddANewPlace';

Vue.use(Router);

const router = new Router({
  base: '/api/spooky-places',
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
    },
    {
      path: '/add-a-new-place',
      name: 'add-a-new-place',
      component: AddANewPlace
    },
    {
      path: '/places-filter',
      name: 'places-filter',
      component: PlacesFilter
    }
  ]
})

export default router;
