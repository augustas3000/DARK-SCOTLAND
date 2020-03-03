<template lang="html">
  <form id="spooky-places-form" v-on:submit.prevent="addNewSpookyPlace" class="form-inline" method="post">

  <div class="">
    <label for="name">Name:</label>
    <input v-model="name" type="text" name="" id="name">
  </div>
<!--  -->
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
    <label for="price">Rating:</label>
    <input v-model="rating" type="number" name="" id="rating">
  </div>

<input type="submit" name="" value="Add">

<div class="ghost">
  <div class="ghost_head">
    <div class="ghost_left_eye ghost_eye"> </div>
    <div class="ghost_smile"></div>
    <div class="ghost_right_eye ghost_eye"></div>
  </div>
  <div class="ghost_bottom">
    <div class="ghost_floaty" id = "ghost_floaty_1"></div>
    <div class="ghost_floaty" id = "ghost_floaty_2"></div>
    <div class="ghost_floaty" id = "ghost_floaty_3"></div>
    <div class="ghost_floaty" id = "ghost_floaty_4"></div>
    <div class="ghost_floaty" id = "ghost_floaty_5"></div>
  </div>
</div>

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
      locality: "",
      description: "",
      imgURL: "",
      rating: null
    }
  },
  methods: {

    addNewSpookyPlace() {

      const newPlaceObj = {
        name: this.name,
        locality: this.locality,
        description: this.description,
        imgURL: this.imgURL,
        rating: parseFloat(this.rating)
      }

      SpookyServices.postSpookyPlace(newPlaceObj)
      .then(spookyPlaceRes => eventBus.$emit('spooky-place-added', spookyPlaceRes));

      this.$router.push("/");

    }
  }
}
</script>

<style lang="css" scoped>
</style>
