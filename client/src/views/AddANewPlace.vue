<template lang="html">
  <div id="add-a-new-place">
    <navigation class="navigation-bar"></navigation>
    <div class="add-a-new-place-container">
      <h1>Add a new spooky place</h1>
      <new-spooky-place-form></new-spooky-place-form>

      <!-- animation -->
      <div class="halloween">
          <div class="head">
              <div class="skull">
                  <div class="eyes">
                      <div class="eye eye-left"></div>
                      <div class="eye eye-right"></div>
                  </div>
              </div>
          </div>
          <div class="body"></div>
          <div class="legs"></div>
      </div>
    </div>


    <!-- end of animation -->

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

  .add-a-new-place-container {
    padding-top: 6rem;
  }


</style>
