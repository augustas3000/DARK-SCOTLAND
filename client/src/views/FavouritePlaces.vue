<template lang="html">
  <div id="favourite-places">
    <navigation class="navigation-bar"></navigation>
    <div class="fav-palces-info">
      <h1>Favourite spooky places</h1>
      <spooky-list-item-details v-if="chosenPlace" v-bind:chosen_place = "chosenPlace"></spooky-list-item-details>
      <spooky-places-list v-if="filterFavs" v-bind:spooky_places="filterFavs"></spooky-places-list>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import SpookyPlacesList from '@/components/SpookyPlacesList.vue';
import SpookyServices from '../services/SpookyServices.js';
import { eventBus } from '@/main';
import SpookyListItemDetails from '@/components/SpookyListItemDetails.vue';


export default {
  name: 'favourite-places',

  components: {
    'navigation': Navigation,
    'spooky-places-list': SpookyPlacesList,
    'spooky-list-item-details': SpookyListItemDetails

  },
    data() {
      return {
        spookyPlaces: [],
        chosenPlace: null
      }
    },

  mounted() {

    this.fetchSpookyPlaces(),

    eventBus.$on('spooky-place-updated', (updatedPlace) => {
      let index = this.spookyPlaces.findIndex(place => updatedPlace._id === place._id)
      this.spookyPlaces.splice(index, 1, updatedPlace)
    })


    eventBus.$on('show-more-info', (chosenPlace) => {
      this.chosenPlace = chosenPlace
    })

    eventBus.$on('close-more-info', () => {
      this.chosenPlace = null;
    })


  },
  methods: {

    fetchSpookyPlaces() {
      SpookyServices.getSpookyPlaces()
      .then(places => this.spookyPlaces = places);
    }

  },

  computed: {

    filterFavs() {
      return this.spookyPlaces.filter((place) => {
        return place.isFavourite
      })
    }

  }



  }


</script>

<style lang="css" scoped>

  #favourite-places {
   padding-top: 6rem;
  }

</style>
