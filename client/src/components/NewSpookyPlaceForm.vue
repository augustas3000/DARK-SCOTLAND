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

  <div class="button-box">

    <input class="button" type="submit" name="" value="Add">

  </div>





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
        rating: parseFloat(this.rating),
        isFavourite: false
      }

      SpookyServices.postSpookyPlace(newPlaceObj)
      .then(spookyPlaceRes => eventBus.$emit('spooky-place-added', spookyPlaceRes));

      this.$router.push("/");

    }
  }
}
</script>

<style lang="css" scoped>

.form-inline {
  display:flex;
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


.form-inline label {
  margin: 5px 10px 5px 0;
  font-size: 1.8rem;
}

/* .form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
} */

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


.button-box {
  align-self: flex-end;
}




.ghost{
  width: 25rem;
  height:30rem;
  position: fixed;
  margin-top:100px;
  margin-bottom: 150px;
  margin-right: 100px;
  margin-left: 700px;
  animation: ghost_bottom_float 2.5s infinite;
  animation-fill-mode:both;
}
.ghost_head{
  width:100%;
  height:250px;
  border-radius:50% 50% 0 0;
  background-color:#fff;
  border: solid;
  border-width: 1.5px;
  border-bottom: white;
}
.ghost_eye{
  position:absolute;
  width:25px;
  height:25px;
  border-radius:50%;
  top:70px;
  background:#111;
}
.ghost_left_eye{
  left:70px;
  transform: scale(.70);
}
.ghost_right_eye{
  right:70px;
}
.ghost_smile{
  position:absolute;
  width:40px;
  height:20px;
  border-radius: 7px 7px 50% 50%;
  background:#000;
  top: 109px;
  left: 106px;
}
.ghost_bottom{
  width:100%;
  height:1px;
  background:#fff;
  border-bottom: white;
}
.ghost_floaty{
  width:20%;
  height:60px;
  background:#fff;
  float: left;
  border-radius:0 0 50% 50%;
  border-bottom: solid 5px black;
  animation: ghost_bottom_float 2.5s infinite;
  animation-fill-mode: both;
}
@keyframes ghost_bottom_float {
  0% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
#ghost_floaty_1{
  animation-delay: .5s
}
#ghost_floaty_2{
  animation-delay: 1.5s
}
#ghost_floaty_3{
  animation-delay: 1s
}
#ghost_floaty_4{
  animation-delay: 2s
}
@keyframes ghost_body_float {
  0% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}


</style>
