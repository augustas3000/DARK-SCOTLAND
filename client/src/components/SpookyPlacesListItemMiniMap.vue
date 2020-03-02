<template lang="html">


  <l-map
  v-if="showMap"
  :zoom="zoom"
  :center="center"
  :options="mapOptions"
  class="map"
  @update:center="centerUpdate"
  @update:zoom="zoomUpdate"
>
  <l-tile-layer
    :url="url"
    :attribution="attribution"
  />

  <l-marker :lat-lng="[spooky_place.location.lat, spooky_place.location.long]">
    <l-popup>
      <div >
        <p>Name: {{spooky_place.name}}</p>
        <p>Locality: {{spooky_place.locality}}</p>
        <p>Spooky Rating: {{spooky_place.rating}}</p>
        <!-- <p>Name: {{munro.name}}</p>
        <hr>
        <p>Height: {{munro.height}}m</p>
        <p>Region: {{munro.region}}</p>
        <p>Grid Ref: {{munro.gridref_letters}} {{munro.gridref_eastings}} {{munro.gridref_northings}}</p>
        <hr>
        <button v-on:click="handleClickAddFav(index)" type="button" name="button">Add to favorites</button>
        <button v-on:click="showDetails(munro)" type="button" name="button">Show details</button> -->
      </div>
    </l-popup>
  </l-marker>


</l-map>
</template>

<script>
import L from 'leaflet';
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { Icon } from 'leaflet';
import { eventBus } from "@/main.js";


delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});



export default {
  name: "spooky-places-list-item-mini-map",
  props: ['spooky_place'],
  components: {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip
},
data() {
  return {
    zoom: 7,
    center: [this.spooky_place.location.lat, this.spooky_place.location.long],
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
    withPopup: latLng(47.41322, -1.219482),
    withTooltip: latLng(47.41422, -1.250482),
    currentZoom: 10,
    currentCenter: latLng(57.097468, -3.765564),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5
    },
    showMap: true
  };
},
computed: {

},
methods: {
  zoomUpdate(zoom) {
    this.currentZoom = zoom;
  },
  centerUpdate(center) {
    this.currentCenter = center;
  },
  showLongText() {
    this.showParagraph = !this.showParagraph;
  },
  innerClick() {
    alert("Click!");
  }
  // handleClickAddFav(index) {
  //   eventBus.$emit('munro-added-to-fav', this.munros[index])
  // },
  // currentHighest() {
  //   // let current_max = 0;
  //   // let current_highest;
  //   // return 'hello'
  //   let current_highest = "";
  //   let current_best_height = 0;
  //
  //   for (let munro of this.munros) {
  //     if (munro.height > current_best_height) {
  //       current_highest = munro.name
  //       current_best_height = munro.height
  //     }
  //   }
  //   return current_highest
    // debugger;
    // for (munro of this.munros) {
    //   if (munro.height > current_max) {
    //     current_max = munro.height
    //     current_highest = munro
    //   }
    // }
    // return current_highest
  }

  // showDetails(munro) {
  //   eventBus.$emit('show-details-selected-dd', munro)
  // }
}




</script>

<style lang="css" scoped>
  .map {
    height: 300px;
    width: 300px;
  }

</style>
