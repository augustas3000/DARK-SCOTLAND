<template lang="html">

  <div class="">
      <h1>Name: {{chosen_place.name}}</h1>

      <spooky-places-list-item-mini-map v-bind:spooky_place="chosen_place"></spooky-places-list-item-mini-map>
  </div>

</template>

<script>
import SpookyPlacesListItemMiniMap from './SpookyPlacesListItemMiniMap.vue'


export default {
  name: "spooky-list-item-details",
  props: ['chosen_place'],
  components: {
    "spooky-places-list-item-mini-map": SpookyPlacesListItemMiniMap
  }
}
</script>

<style lang="css" scoped>
</style>
