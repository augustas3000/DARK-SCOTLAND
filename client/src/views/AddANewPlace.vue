<template lang="html">
  <div id="add-a-new-place">
    <navigation class="navigation-bar"></navigation>
    <h2>Add a new place</h2>
    <new-spooky-place-form></new-spooky-place-form>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import SpookyServices from '@/services/SpookyServices.js';
import NewSpookyPlaceForm from '@/components/NewSpookyPlaceForm.vue';
import { eventBus } from '@/main';
export default {
  components: {
    name: 'add-a-new-place',
    'navigation': Navigation,
    'new-spooky-place-form': NewSpookyPlaceForm
  }
}
</script>

<style lang="css" scoped>
</style>
