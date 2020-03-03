<template lang="html">
  <div id="favourite-places">
    <navigation class="navigation-bar"></navigation>
    <div class="fav-palces-info">
      <h2>Favourite Places</h2>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  components: {
    name: 'favourite-places',
    'navigation': Navigation
  }
}
</script>

<style lang="css" scoped>

  .fav-places-info {
    /* margin-top: 8rem; */
  }

</style>
