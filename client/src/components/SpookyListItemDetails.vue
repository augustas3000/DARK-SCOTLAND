<template lang="html">

  <div class="chosen-place-details">
      <h1>Name: {{chosen_place.name}}</h1>
      <p>Location: {{chosen_place.locality}}</p>
      <spooky-places-list-item-mini-map v-bind:spooky_place="chosen_place"></spooky-places-list-item-mini-map>
      <img v-bind:src="chosen_place.imgURL" v-bind:alt="chosen_place.name" /> 
      <p>{{chosen_place.description}}</p>
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
.chosen-place-details {
  border: 1px gray solid;
}
</style>
