<template lang="html">

  <li>
    <p>{{spooky_place.name}}</p>
    <button type="button" name="button">More info</button>
    <button type="button" name="button">Update</button>
    <button type="button" name="button">Delete</button>
  </li>

</template>

<script>

export default {
  name: "spooky-places-list-item",
  props: ['spooky_place']
}
</script>

<style lang="css" scoped>

</style>
