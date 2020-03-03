<template lang="html">

    <div id="home">
      <navigation></navigation>
      <new-spooky-place-form></new-spooky-place-form>
      <hr>
        <h1>Spooky Filter</h1>
        <spooky-places-filter v-bind:spooky_places="spookyPlaces"></spooky-places-filter>
      <hr>
      <spooky-list-item-details v-if="chosenPlace" v-bind:chosen_place="chosenPlace"></spooky-list-item-details>
      <hr>
      <spooky-places-list v-if="foundPlaces" v-bind:spooky_places="foundPlaces"></spooky-places-list>
      <spooky-places-list v-else-if="spookyPlacesSorted" v-bind:spooky_places="spookyPlacesSorted"></spooky-places-list>
      <spooky-places-list v-else="spookyPlaces" v-bind:spooky_places="spookyPlaces"></spooky-places-list>


    </div>


</template>

<script>
import SpookyServices from '@/services/SpookyServices.js'
import SpookyPlacesList from '@/components/SpookyPlacesList.vue'
import NewSpookyPlaceForm from '@/components/NewSpookyPlaceForm.vue'
import SpookyPlacesFilter from '@/components/SpookyPlacesFilter.vue'
import { eventBus } from '@/main';
import Navigation from '@/components/Navigation.vue'
import SpookyListItemDetails from '@/components/SpookyListItemDetails.vue'


export default {
  name: 'app',
  data() {
    return {
      spookyPlaces: [],
      foundPlaces: null,
      spookyPlacesSorted: null,
      chosenPlace: null
    }
  },
  methods: {
    fetchSpookyPlaces() {
      // gonna use a different service to test filtering
      SpookyServices.getSpookyPlaces()
      .then(places => this.spookyPlaces = places);
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

      // this.foundPlaces = this.foundPlaces.sort(compare)
      // this.spookyPlaces = this.spookyPlaces.sort(compare)


      // this.spookyPlacesSorted = this.spookyPlaces.sort(compare)
      if (this.foundPlaces) {
        this.foundPlaces = this.foundPlaces.sort(compare)
      } else {
        this.spookyPlacesSorted = this.spookyPlaces.sort(compare)
      }
    }
  },

  components: {
    'spooky-places-list': SpookyPlacesList,
    'new-spooky-place-form': NewSpookyPlaceForm,
    'spooky-places-filter': SpookyPlacesFilter,
    'navigation': Navigation,
    'spooky-list-item-details': SpookyListItemDetails
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

    eventBus.$on('search-submitted', (filteredPlaces) => {
      this.foundPlaces = filteredPlaces
      // this.spookyPlaces = searchedPlaces
      // console.log(filteredPlaces);

    })

    // eventBus.$on('search-stopped', () => {
    //   this.foundPlaces = null;
    // })

    eventBus.$on('sort-by-rating', () => {
      this.sortByRating()
    })

    eventBus.$on('find-by-locality', (selectedLocality) => {
      this.foundPlaces = this.spookyPlaces.filter((place) => {
        return place.locality.toLowerCase() === selectedLocality.toLocaleLowerCase()
      })

    })

    eventBus.$on('filter-refresh', () => {
      this.foundPlaces = null
      this.spookyPlacesSorted = null
    })

    eventBus.$on('show-more-info', (chosenPlace) => {
      // this.chosenPlace = null
      this.chosenPlace = chosenPlace
    })

  }
}
</script>

<style lang="css" scoped>

</style>
