<template lang="html">
  <div id="favourite-places">
    <navigation class="navigation-bar"></navigation>
    <div class="fav-palces-info">
      <h1>Favourite spooky places</h1>
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

  #favourite-places {
   padding-top: 6rem;
  }

</style>
