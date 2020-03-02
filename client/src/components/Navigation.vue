<template lang="html">

  <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">Favourite Places</a></li>
  <li><a href="#contact">Add New Place</a></li>
  <li><a href="#about">Places Filter</a></li>
  </ul>


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
