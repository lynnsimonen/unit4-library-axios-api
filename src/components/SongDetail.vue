<template>
  <div class="song">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Pages: {{item.pages}}</p>
  </div>
</template>

<script>
import {Song} from "@/models/Media";

export default {
  name: "SongDetail",
  props: {
    item: {type: Song}
  },
}
</script>

<style scoped>

</style>
