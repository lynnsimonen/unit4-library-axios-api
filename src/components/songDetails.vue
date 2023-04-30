<template>
  <div class="song">
    <h3 class="card-title">{{item.artistName}}</h3>
    <p class="card-text">Collection Name: {{item.collectionName}}</p>
  </div>
</template>

<script>
import {Song} from "@/models/Media";

export default {
  name: "songDetails",
  props: {
    item: {type: Song}
  },
}
</script>

<style scoped>

</style>
