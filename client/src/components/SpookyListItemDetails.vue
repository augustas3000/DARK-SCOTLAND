<template lang="html">

  <div class="chosen-place-details">
      <h1>{{chosen_place.name}}</h1>
      <h2>{{chosen_place.locality}}</h2>

       <a v-on:click.stop.prevent="closeMoreInfo" href="#" class="close"></a>

      <div class="map-and-image-box">
        <spooky-places-list-item-mini-map v-bind:spooky_place="chosen_place"></spooky-places-list-item-mini-map>

        <img v-bind:src="chosen_place.imgURL" v-bind:alt="chosen_place.name" />

      </div>

      <div class="description-text-box">
        <h3>Description</h3>
        <p>{{chosen_place.description}}</p>

      </div>
  </div>

</template>

<script>
import SpookyPlacesListItemMiniMap from './SpookyPlacesListItemMiniMap.vue'
import { eventBus } from '@/main.js'

export default {
  name: "spooky-list-item-details",
  props: ['chosen_place'],
  components: {
    "spooky-places-list-item-mini-map": SpookyPlacesListItemMiniMap
  },
  methods: {
    closeMoreInfo() {
      eventBus.$emit('close-more-info');
    }
  }
}
</script>

<style lang="css" scoped>

.chosen-place-details {
  /* border: 1px gray solid; */
  /* margin-top: 4rem; */
  text-align: center;
  padding: 3rem;
  width: 93%;
  position: fixed;
  top: 50%;
  margin-top: -23rem;
  background-color: lightgrey;
  height: 50rem;
  overflow: scroll;
  border-radius: 10px;

  background-image: linear-gradient(to right bottom, rgba(244, 236, 236, 0.6), rgba(206, 213, 185, 0.6)), url('../assets/more-info-bckgrnd.jpg');
  background-size: cover;

  background-position: center;
  z-index: 2;
}

.map-and-image-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding-top: 2rem;

}

img {
height: 30rem;
/* max-width: 40%; */

}

.description-text-box {
  padding-top: 4rem;
  font-size: 1.6rem;
  text-align: justify;
}


/* exit button */

.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}




</style>
