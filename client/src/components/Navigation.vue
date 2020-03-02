<template lang="html">
 <!-- <div class="">
   <ul>
   <li><router-link :to="{ name: 'home'}">Home</router-link></li>
   <li><router-link :to="{ name: 'favourite-places'}">Favourite Places</router-link></li>
   <li><router-link :to="{ name: 'add-new-place'}">Add a new place</router-link></li>
   <li><router-link :to="{ name: 'places-filter'}">Places Filter</router-link></li>
   </ul>
   <router-view id="view"></router-view>
 </div> -->


</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }


  /* ================================== */




</style>
