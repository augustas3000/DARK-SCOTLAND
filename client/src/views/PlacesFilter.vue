<template lang="html">
  <div id="places-filter">
    <navigation></navigation>
    <h2>Places Filter</h2>
    <h1>Spooky Filter</h1>
    <spooky-places-filter v-bind:spooky_places="foundPlaces"></spooky-places-filter>
    <spooky-list-item-details v-if="chosenPlace" v-bind:chosen_place="chosenPlace"></spooky-list-item-details>
    <spooky-places-list v-if="foundPlaces" v-bind:spooky_places="foundPlaces"></spooky-places-list>
    <spooky-places-list v-else-if="spookyPlacesSorted" v-bind:spooky_places="spookyPlacesSorted"></spooky-places-list>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import SpookyPlacesFilter from '@/components/SpookyPlacesFilter.vue';
import SpookyServices from '@/services/SpookyServices.js';
import SpookyPlacesList from '@/components/SpookyPlacesList.vue';
import SpookyListItemDetails from '@/components/SpookyListItemDetails.vue';
import { eventBus } from '@/main';
export default {
  data() {
    return {
      foundPlaces: null,
      spookyPlacesSorted: null,
      chosenPlace: null
    }
  },
  components: {
    name: 'places-filter',
    'navigation': Navigation,
    'spooky-places-filter': SpookyPlacesFilter,
    'spooky-places-list': SpookyPlacesList
  },
  methods: {
    fetchSpookyPlaces() {
      SpookyServices.getSpookyPlaces()
      .then(places => this.foundPlaces = places);
    },
    sortByRating() {

      function compare(a, b) {
      const placeA = a.rating;
      const placeB = b.rating;

      let comparison = 0;

      if (placeA > placeB) {
        comparison = 1;
      } else if (placeA < placeB) {
        comparison = -1;
      }
      return comparison * -1;
      }

      if (this.foundPlaces) {
        this.foundPlaces = this.foundPlaces.sort(compare)
      } else {
        this.spookyPlacesSorted = this.spookyPlaces.sort(compare)
      }
    }
  },
  mounted() {
    this.fetchSpookyPlaces();

    eventBus.$on('search-submitted', (filteredPlaces) => {
      this.foundPlaces = filteredPlaces
    })
    eventBus.$on('sort-by-rating', () => {
      this.sortByRating()
    })

    eventBus.$on('find-by-locality', (selectedLocality) => {
      this.foundPlaces = this.foundPlaces.filter((place) => {
        return place.locality.toLowerCase() === selectedLocality.toLocaleLowerCase()
      })

    })

    eventBus.$on('filter-refresh', () => {
      this.fetchSpookyPlaces();
      this.spookyPlacesSorted = null;
    })

    eventBus.$on('spooky-place-deleted', (id) => {
    let index = this.foundPlaces.findIndex(foundPlace => foundPlace._id === id)
    this.foundPlaces.splice(index, 1)
    })

    eventBus.$on('spooky-place-updated', (updatedPlace) => {
    let index = this.foundPlaces.findIndex(place => updatedPlace._id === place._id)
    this.foundPlaces.splice(index, 1, updatedPlace)
    })

  }
}
</script>

<style lang="css" scoped>
</style>
