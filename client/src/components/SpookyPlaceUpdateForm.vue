<template lang="html">

  <form v-on:submit.prevent="updateAndSave" class="" method="post">
  <h2>Update form for: {{nameOriginal}}</h2>

  <div class="">
    <label for="name">Name:</label>
    <input v-model="name" type="text" name="" id="name">
  </div>

  <div class="">
    <label for="email">Locality:</label>
    <input v-model="locality" type="text" name="" id="locality">
  </div>

  <div class="">
    <label for="description">Description:</label>
    <input v-model="description" type="text" name="" id="description">
  </div>


  <!-- make sure admin can upload from local as well as paste in url -->
  <div class="">
    <label for="imgURL">Photo URL:</label>
    <input v-model="imgURL" type="text" name="" id="imgURL">
  </div>


  <div class="">
    <label for="rating">Rating:</label>
    <input v-model="rating" type="number" name="" id="rating">
  </div>

<input type="submit" name="" value="Save and Update">
<button v-on:click="closeUpdateForm" type="button" name="button">Cancel</button>

</form>

</template>

<script>
import { eventBus } from '../main.js';
import SpookyServices from '../services/SpookyServices.js'

export default {
  name: "spooky-place-update-form",
  props: ['spooky_place_upd'],
  data() {
    return {
      name: this.spooky_place_upd.name,
      nameOriginal: this.spooky_place_upd.name,
      locality: this.spooky_place_upd.locality,
      description: this.spooky_place_upd.description,
      imgURL: this.spooky_place_upd.imgURL,
      rating: this.spooky_place_upd.rating
    }
  },
  methods: {
    closeUpdateForm() {
      eventBus.$emit('upd-form-cancel-button-clicked')
    },

    updateAndSave() {
      // initialize a new object based on user's input to the upd form
      // no db index yet
      const updatedPlaceObjNoId = {
        name: this.name,
        locality: this.locality,
        description: this.description,
        imgURL: this.imgURL,
        rating: this.rating
      }

      SpookyServices.updateSpookyPlace(this.spooky_place_upd._id, updatedPlaceObjNoId)
      .then((updatedPlace) => eventBus.$emit('spooky-place-updated', updatedPlace))

      this.closeUpdateForm();
    }

  }



  }

</script>

<style lang="css" scoped>
</style>
