<template lang="html">

    <div id="home">
      <navigation class="navigation-bar"></navigation>

      <spooky-list-item-details v-if="chosenPlace" v-bind:chosen_place = "chosenPlace"></spooky-list-item-details>


      <spooky-places-list v-if="spookyPlaces" v-bind:spooky_places="spookyPlaces"></spooky-places-list>
    </div>


</template>

<script>
import SpookyServices from '@/services/SpookyServices.js';
import SpookyPlacesList from '@/components/SpookyPlacesList.vue';
import { eventBus } from '@/main';
import Navigation from '@/components/Navigation.vue';
import SpookyListItemDetails from '@/components/SpookyListItemDetails.vue';

export default {
  name: 'app',
  data() {
    return {
      spookyPlaces: [],
      chosenPlace: null
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

  }
}
</script>

<style lang="css" scoped>

</style>
