<template lang="html">


  <li class="spooky-places-list-item">
    <spooky-place-update-form v-if="updFormShow" v-bind:spooky_place_upd="spooky_place"></spooky-place-update-form>

    <p>{{spooky_place.name}}</p>
    <p class="rating">👻{{spooky_place.rating}} of 10 👻</p>
    <img v-bind:src="spooky_place.imgURL" v-bind:alt="spooky_place.imgURL">
    <div class="button-box">
      <button v-on:click="moreInfo" class="button">More info</button>
      <button v-on:click="updButtonClicked" class="button">Update</button>
      <button v-on:click="deletePlace" class="button">Delete</button>
    </div>

    <!-- <spooky-places-list-item-mini-map v-bind:spooky_place="spooky_place"></spooky-places-list-item-mini-map> -->
  </li>

</template>

<script>
import SpookyServices from '../services/SpookyServices.js'
import { eventBus } from '../main.js';
import SpookyPlaceUpdateForm from './SpookyPlaceUpdateForm.vue'
import SpookyPlacesListItemMiniMap from './SpookyPlacesListItemMiniMap.vue'


export default {
  name: "spooky-places-list-item",
  props: ['spooky_place'],
  components: {
    "spooky-place-update-form": SpookyPlaceUpdateForm,
    "spooky-places-list-item-mini-map": SpookyPlacesListItemMiniMap
  },

  data() {
    return {
    updFormShow: false
    }
  },

  methods: {
    deletePlace() {
      SpookyServices.deleteSpookyPlace(this.spooky_place._id)
      .then(() => eventBus.$emit('spooky-place-deleted', this.spooky_place._id))
    },

    // moreInfoClick() {
    //   SpookyServices.moreInfoSpookyPlace(this.spooky_place._id)
    //   .then(() => eventBus.$emit('spooky-place-info', this.spooky_place._id))
    // },

    updButtonClicked() {
      this.updFormShow = true
    },

    moreInfo() {
      // window.scrollTo(0,0);
      eventBus.$emit('show-more-info', this.spooky_place)

    }
  },

  mounted() {
    eventBus.$on('upd-form-cancel-button-clicked', () => {
      this.updFormShow = false;
    })
  }
}
</script>

<style lang="css" scoped>


  .spooky-places-list-item {
    /* width: 50%; */
    border: 1px solid lightgrey;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
  }

  .rating {
    font-size: 1.5rem;
  }

  .button-box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  .button {
  background-color: #e7e7e7;
  border: none;
  color: black;
  padding: 1rem 1rem;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 1.2rem;
  width: 10rem;
  /* margin-right: 0.5rem;
  margin-bottom: 0.5rem; */
  }


  img {
    width: 28rem;
    height: 20rem;
    margin: 1rem 1rem;
  }
</style>
