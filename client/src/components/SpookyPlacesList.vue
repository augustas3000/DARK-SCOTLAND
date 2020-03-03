<template lang="html">

  <ul class="spooky-places-list">
    <spooky-places-list-item v-for="(place, index) in spooky_places" v-bind:key="index" v-bind:spooky_place="place"></spooky-places-list-item>
  </ul>





</template>

<script>
import SpookyServices from '../services/SpookyServices.js'
import SpookyPlacesListItem from './SpookyPlacesListItem.vue'



export default {
  name: "spooky-places-list",
  props: ['spooky_places'],

  components: {
    "spooky-places-list-item": SpookyPlacesListItem
  }
}
</script>

<style lang="css" scoped>

.spooky-places-list {
/* padding-top: 6rem;  */
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
grid-gap: 3rem;
padding: 3rem;
list-style-type: none;
/* grid-auto-flow: column; */


}


</style>
