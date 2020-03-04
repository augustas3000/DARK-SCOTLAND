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
    zoom: 5,
    center: latLng(56.859643, -4.192247),
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
  centerUpdate() {
    this.currentCenter = this.center;
  },
  showLongText() {
    this.showParagraph = !this.showParagraph;
  },
  innerClick() {
    alert("Click!");
  }

  }

}

</script>

<style lang="css" scoped>
  .map {
    height: 30rem;
    width: 40rem;
    z-index: 0
  }

</style>
