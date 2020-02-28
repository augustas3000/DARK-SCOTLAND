<template lang="html">

    <div class="app-main-container">

      <new-spooky-place-form></new-spooky-place-form>
      <spooky-places-list v-bind:spooky_places="spookyPlaces"></spooky-places-list>


    </div>


</template>

<script>
import SpookyServices from './services/SpookyServices.js'
import SpookyPlacesList from './components/SpookyPlacesList.vue'
import NewSpookyPlaceForm from './components/NewSpookyPlaceForm.vue'
import { eventBus } from './main';
// import SpookyPlacesListItem from './components/SpookyPlacesListItem.vue'

export default {
  name: 'app',
  data() {
    return {
      spookyPlaces: []
    }
  },
  methods: {
    fetchSpookyPlaces() {
      SpookyServices.getSpookyPlaces()
      .then(places => this.spookyPlaces = places);
    }
  },

  components: {
    'spooky-places-list': SpookyPlacesList,
    'new-spooky-place-form': NewSpookyPlaceForm
    // 'spooky-places-list-item': SpookyPlacesListItem
  },

  mounted() {
    this.fetchSpookyPlaces();

    eventBus.$on('spooky-place-added', (spookyPlaceRes) => {
      this.spookyPlaces.push(spookyPlaceRes)
    })

  }
}
</script>


<style lang="css" scoped>

</style>
