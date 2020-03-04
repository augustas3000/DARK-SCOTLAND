<template lang="html">

  <div class="filter">
    <div class="search-by-name">
      <label for="">Search by name</label>
      <input v-on:keyup="triggerSearch" v-model="placeSearchString"  type="text" name="search-input" value="" placeholder="Enter name">
    </div>

    <div class="sort-by-rating">
      <label for="">Filter by rating</label>
      <button class="button" v-on:click="sortByRatingBtnClicked" type="button" name="button">Sort by rating</button>

    </div>


    <div class="find-by-locality">

        <label for="">Find by locality</label>
        <select class="locality-dd" v-model="selectedLocality" >
          <option v-for="(place, index) in spooky_places" v-bind:key="index" v-bind:value="place.locality">{{place.locality}}</option>
        </select>

        <button class="button" v-on:click="searchByLocality" type="button" name="button">Submit</button>
    </div>


    <div class="">
      <button class="button" v-on:click="searchRefresh" type="button" name="button">Refresh</button>
    </div>

  </div>

</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: "spooky-places-filter",
  props: ['spooky_places'],
  data() {
    return {
      placeSearchString: "",
      filteredPlaces: [],
      selectedLocality: ""

    }
  },
  computed: {

},

  methods: {
    triggerSearch() {
      this.filterPlaces()
      eventBus.$emit('search-submitted', this.filteredPlaces)
    },

    stopSearch() {
      eventBus.$emit('search-stopped')
    },

    filterPlaces() {

     if (this.placeSearchString) {
         this.filteredPlaces = this.spooky_places.filter(place => {
     return place.name.toLowerCase().includes(this.placeSearchString.toLowerCase())

    })}
    },

    sortByRatingBtnClicked() {
      eventBus.$emit('sort-by-rating')
    },

    searchByLocality() {
      eventBus.$emit('find-by-locality', this.selectedLocality)
    },

    searchRefresh() {
      eventBus.$emit('filter-refresh')
    }
 }
}

</script>

<style lang="css" scoped>

  .filter {
   display: flex;
   width: 100%;
   padding: 12px;
   border: 3px solid #ccc;
   border-radius: 4px;
   resize: vertical;
   align-items: center;
   justify-content: space-between;
   flex-direction: row;
   align-items: baseline;
  }

  .button {
    background-color: #E7E7E7;
    border: none;
    color: black;
    padding: 1rem 1rem;
    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    width: 10rem;
  }

  .filter label {
    margin: 5px 10px 5px 0;
    font-size: 1.8rem;
  }

  .locality-dd {
    margin-right: 1rem;
  }

</style>
