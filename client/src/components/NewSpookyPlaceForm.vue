<template lang="html"
>
  <form v-on:submit.prevent="addNewSpookyPlace" class="" method="post">
  <h2>Add a spooky place:</h2>

  <div class="">
    <label for="name">Name:</label>
    <input v-model="name" type="text" name="" id="name">
  </div>
<!--  -->
  <div class="">
    <label for="email">Location:</label>
    <input v-model="location" type="text" name="" id="location">
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
    <label for="price">Price:</label>
    <input v-model="price" type="number" name="" id="price">
  </div>

<input type="submit" name="" value="Add">
</form>

</template>

<script>
import SpookyServices from '../services/SpookyServices.js';
import { eventBus } from '../main';

export default {
  name: "new-spooky-place-form",
  data() {
    return {
      name: "",
      location: "",
      description: "",
      imgURL: "",
      price: null
    }
  },
  methods: {
    addNewSpookyPlace() {
      const newPlaceObj = {
        name: this.name,
        location: this.location,
        description: this.description,
        imgURL: this.imgURL,
        price: this.price
      }

      SpookyServices.postSpookyPlace(newPlaceObj)
      .then(spookyPlaceRes => eventBus.$emit('spooky-place-added', spookyPlaceRes))

    }
  }
}
</script>

<style lang="css" scoped>
</style>
