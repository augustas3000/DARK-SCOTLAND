<template lang="html">

    <div class="app-main-container">

      <navigation></navigation>

      <new-spooky-place-form></new-spooky-place-form>
      <hr>
        <h1>Spooky Filter</h1>
        <spooky-places-filter v-bind:spooky_places="spookyPlaces"></spooky-places-filter>
      <hr>
      <spooky-places-list v-bind:spooky_places="spookyPlaces"></spooky-places-list>


    </div>


</template>

<script>
import SpookyServices from './services/SpookyServices.js'
import SpookyPlacesList from './components/SpookyPlacesList.vue'
import NewSpookyPlaceForm from './components/NewSpookyPlaceForm.vue'
import SpookyPlacesFilter from './components/SpookyPlacesFilter.vue'
import { eventBus } from './main';
import Navigation from './components/Navigation.vue'
// import HeaderComponent from './main/HeaderView.vue'
// import SpookyPlacesListItem from './components/SpookyPlacesListItem.vue'

export default {
  name: 'app',
  data() {
    return {
      spookyPlaces: [],
      filtered: []
    }
  },
  methods: {
    fetchSpookyPlaces() {
      // gonna use a different service to test filtering
      SpookyServices.getSpookyPlaces()
      .then(places => this.spookyPlaces = places);
    }
  },

  components: {
    'spooky-places-list': SpookyPlacesList,
    'new-spooky-place-form': NewSpookyPlaceForm,
    'spooky-places-filter': SpookyPlacesFilter,
    'navigation': Navigation
    // 'header': Header
    // 'spooky-places-list-item': SpookyPlacesListItem
  },

  mounted() {
    this.fetchSpookyPlaces();

    eventBus.$on('spooky-place-added', (spookyPlaceRes) => {
      this.spookyPlaces.push(spookyPlaceRes)
    })

    eventBus.$on('spooky-place-deleted', (id) => {
    let index = this.spookyPlaces.findIndex(spookyPlace => spookyPlace._id === id)
    this.spookyPlaces.splice(index, 1)
    })

    // spooky place updated event listener:
    // spooky-place-updated
    eventBus.$on('spooky-place-updated', (updatedPlace) => {
    let index = this.spookyPlaces.findIndex(place => updatedPlace._id === place._id)
    this.spookyPlaces.splice(index, 1, updatedPlace)
  })

    eventBus.$on('filter-submited', (filteredPlaces) => {
      // debugger;
      this.spookyPlaces = filteredPlaces
    })

  }
}
</script>


<style lang="css" scoped>




</style>
