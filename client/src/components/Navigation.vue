<template lang="html">
 <nav>
   <ul>
   <li><router-link :to="{ name: 'home'}">Home</router-link></li>
   <li><router-link :to="{ name: 'favourite-places'}">Favourite Places</router-link></li>
   <li><router-link :to="{ name: 'add-a-new-place'}">Add a new place</router-link></li>
   <li><router-link :to="{ name: 'places-filter'}">Places Filter</router-link></li>
   </ul>
   <router-view id="view"></router-view>
 </nav>


</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

  nav {
    border: 1px white solid;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    top: 1rem;
    width: 93%;
    z-index: 10;
  }

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
    padding: 1.4rem 1.6rem;
    text-decoration: none;
    font-size: 1.6rem;
    border-right: 1px grey solid;
    /* height: 6rem; */
  }

  li a:hover {
    background-color: #111;
  }

</style>
