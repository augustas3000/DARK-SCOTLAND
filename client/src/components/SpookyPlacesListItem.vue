<template lang="html">

  <li>
    <spooky-place-update-form v-if="updFormShow" v-bind:spooky_place_upd="spooky_place"></spooky-place-update-form>
    <p>{{spooky_place.name}}</p>
    <button type="button" name="button">More info</button>
    <button v-on:click="updButtonClicked" type="button" name="button">Update</button>
    <button v-on:click="deletePlace" type="button" name="button">Delete</button>
  </li>

</template>

<script>
import SpookyServices from '../services/SpookyServices.js'
import { eventBus } from '../main.js';
import SpookyPlaceUpdateForm from './SpookyPlaceUpdateForm.vue'


export default {
  name: "spooky-places-list-item",
  props: ['spooky_place'],
  components: {
    "spooky-place-update-form": SpookyPlaceUpdateForm
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

    updButtonClicked() {
      this.updFormShow = true
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

</style>
