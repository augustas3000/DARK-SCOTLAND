<template lang="html">

  <!-- <form v-on:submit.prevent="filterSubmitted" class="" method="post">

    <h2>Select price range</h2>
    <select v-model="priceRangeSelected" >

      <option v-for="(value, name, index) in priceRanges" v-bind:value="value" v-bind:key="index">£ {{name}} </option>
    </select>

    <select v-model="selectedLocality">
      <option v-for="(place, index) of spooky_places" v-bind:value="place.locality" v-bind:key="index"> {{place.locality}} </option>
    </select>

    <input type="submit" name="" value="Submit filter">
  </form> -->




</template>

<script>
import SpookyServices from '../services/SpookyServices.js';
import { eventBus } from '../main.js';


export default {
  name: "spooky-places-filter",
  data() {
    return {
      priceRangeSelected: null,
      selectedLocality: null,

      priceRanges: { "0-100": {
        greaterThan: 0,
        lessOrEqualTo: 100
      },
      "100-200": {
        greaterThan: 100,
        lessOrEqualTo: 200
      },
      "200+": {
        greaterThan: 200
      }
    }
    }
  },
  props: ['spooky_places'],
  methods: {
    filterSubmitted() {
      //
      // SpookyServices.getSpookyPlacesF(this.priceRangeSelected)
      // .then(filteredPlaces => {
      //  eventBus.$emit('filter-submited', filteredPlaces)});
      //

      const formInput = {
        price: this.priceRangeSelected,
        locality: this.selectedLocality
      }

       SpookyServices.getSpookyPlacesF(formInput)
       .then((filteredPlaces) => {
         eventBus.$emit('filter-submited', filteredPlaces)
       })

    }
  }
}
</script>

<style lang="css" scoped>
</style>
